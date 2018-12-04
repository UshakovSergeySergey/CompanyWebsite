import React from 'react';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
    render() {
        return (
            <div className='container-fluid' style={ { height: '100%' } }>
                <div className='row' style={ { height: '100%' } }>
                    <div className='col carousel-items-block' style={ { height: '100%' } }>
                        <div id="carousel-items" className='carousel slide' data-ride='carousel'>
                            { this.getIndicators() }
                            { this.getSlides() }
                            { this.getControls() }
                            </div>
                    </div>
                </div>
            </div>
        );
    }
    getIndicators = () => {
        const numberOfSlides = this.getNumberOfSlides();
        let indices = Array.from(new Array(numberOfSlides), (value, index)=> index);
        let indicatorList = indices.map(function (index) {
            return (
                <li key={ index } data-target='#carousel-items' data-slide-to={ index } className={ index === 0 ? 'active' : ''}></li>
            );
        });
        return (
            <ol className='carousel-indicators'>
                { indicatorList }
            </ol>
        );
    };
    getNumberOfSlides = () => {
        const numberOfItemsPerSlide = this.props.numberOfRows * this.props.numberOfColumns;

        const totalNumberOfItems = this.getTotalNumberOfItems();

        let numberOfSlides = Math.floor(totalNumberOfItems/ numberOfItemsPerSlide);
        if(totalNumberOfItems % numberOfItemsPerSlide !== 0)
            numberOfSlides++;

        return numberOfSlides;
    };
    getTotalNumberOfItems = () => {
        if(this.props.items == null)
            return 0;
        return this.props.items.length;
    };
    getSlides = () => {
        let slides = [];
        for(let slideCounter = 0; slideCounter < this.getNumberOfSlides(); ++slideCounter) {
            let slide = {
                id: slideCounter,
                rows: this.getRows(slideCounter)
            };
            slides.push(slide);
        }

        let slideList = slides.map(this.mapSlides);

        return (
            <div className='carousel-inner' role='listbox'>
                { slideList }
            </div>
        );
    };
    getRows = (slideCounter) => {
        let rows = [];

        for(let rowCounter = 0; rowCounter < this.props.numberOfRows; ++rowCounter) {
            let row = {
                id: rowCounter,
                columns: this.getColumns(slideCounter, rowCounter)
            };
            rows.push(row);
        }

        return rows;
    };
    getColumns = (slideCounter, rowCounter) => {
        let columns = [];
        let itemsPassed = (slideCounter * this.props.numberOfRows + rowCounter) * this.props.numberOfColumns;

        for(let columnCounter = 0; columnCounter < this.props.numberOfColumns; ++columnCounter) {
            var currentItemId = itemsPassed + columnCounter;
            var column = {
                id: columnCounter,
                itemId: currentItemId
            };
            columns.push(column);
        }

        return columns;
    };
    mapSlides = (slide) => {
        let rowList = slide.rows.map(this.mapRows);
        return (
            <div className={ ( slide.id === 0 ? 'active ' : '') + 'item carousel-item-layout'} key={ slide.id }>
                { rowList }
            </div>
        );
    };
    mapRows = (row) => {
        let columnList = row.columns.map(this.mapColumns);
        return (
            <div className='row' key={ row.id }>
                { columnList }
            </div>
        );
    };
    mapColumns = (column) => {
        let itemData = column.itemId < this.getTotalNumberOfItems() ? this.props.items[column.itemId] : null;
        return (
            <div className='col-sm-4' key={ column.id }>
                { this.props.renderItem(itemData) }
            </div>
        );
    };
    getControls = () => {
        return (
            <React.Fragment>
                <a className='left carousel-control' href='#carousel-items' role='button' data-slide='prev'>
                    <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                </a>
                <a className='right carousel-control' href='#carousel-items' role='button' data-slide='next'>
                    <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                </a>
            </React.Fragment>
        );
    };
}

Carousel.propTypes = {
    numberOfRows: PropTypes.number.isRequired,
    numberOfColumns: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired
};

export { Carousel };

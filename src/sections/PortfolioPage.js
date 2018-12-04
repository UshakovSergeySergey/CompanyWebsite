import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Carousel } from '../common/Carousel';
import { ProjectThumbnail } from '../common/ProjectThumbnail';
import { Project } from '../InternalDataTypes/Project';

class PortfolioPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Portfolio);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>Портфолио</h1>
                <Carousel numberOfRows={ 2 } numberOfColumns={ 3 } items={ webSiteStructure.Projects } renderItem={ this.renderProjectThumbnail }/>
            </div>
        );
    }
    renderProjectThumbnail = (projectData) => {
        return (<ProjectThumbnail project={ Object.assign(new Project(), projectData) }/>);
    };
}

PortfolioPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired
};

export { PortfolioPage };

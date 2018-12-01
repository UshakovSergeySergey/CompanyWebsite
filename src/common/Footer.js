import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    getLinksToSections = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const currentSection = this.props.currentSection;
        const sections = webSiteStructure.getListOfSections();
        const sectionList = sections.map(section => {
            let isActive = '';
            if(currentSection === section.Link)
                isActive = ' active';
            let sectionChanged = (e) => {
                this.props.sectionChanged(section.Link);
            };
            return (
                <li className={ 'footer-nav-element' + isActive } key={ section.OrdinalNumber }>
                    <Link className='footer-nav-element-selected' to={ process.env.PUBLIC_URL + section.Link } onClick={ sectionChanged }>{ section.Name }</Link>
                </li>);
        });
        return (<ul className='nav navbar-nav'>{ sectionList }</ul>);
    };
    getLinksToSocialMedia = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const links = webSiteStructure.getListOfSocialMedia();
        const linkList = links.map(link => {
            return (
                <a key={ link.OrdinalNumber } href={ link.Link } target='_blank' rel='noopener noreferrer'>
                    <img className='social-media-icon' src={ process.env.PUBLIC_URL + link.Icon } alt={ link.Link }/>
                </a>
            );
        });

        const chunkSize = 5;
        let linkRows = [];
        for(let start = 0, end = linkList.length; start < end; start += chunkSize)
            linkRows.push(linkList.slice(start, start + chunkSize));

        const rowList = linkRows.map((row, index) => {
            return (<div className='row' key={ index }>{ row }</div>);
        });

        return (<React.Fragment>{ rowList }</React.Fragment>);
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <div id='footer-block'>
                <div style={ { color: '#9d9d9d' } }>
                    <div className='row' style={ { paddingTop: '30px' } }>
                        <div className='col-xs-6' style={ { lineHeight: 1.8 } }>
                            <div className='row'>{ webSiteStructure.getCompanyName() }</div>
                            <div className='row'>{ webSiteStructure.getCompanyLegalAddress() }</div>
                            <div className='row'><a href={ 'mailto:' + webSiteStructure.getCompanyEmail() }>{ webSiteStructure.getCompanyEmail() }</a></div>
                            <div className='row'><a href={ 'tel:' + webSiteStructure.getCompanyPhoneNumber() }>{ webSiteStructure.getCompanyPhoneNumber() }</a></div>
                            <div className='row'>
                                { this.getLinksToSocialMedia() }
                            </div>
                        </div>
                        <div className='col-xs-3'>
                        </div>
                        <div className='col-xs-3'>
                            <div className='navbar navbar-inverse navbar-stacked' style={ { borderColor: 'transparent' } }>
                                { this.getLinksToSections() }
                            </div>
                        </div>
                    </div>
                    <div className='row' style={ { lineHeight: 3.8, textAlign: 'center' } }>© { webSiteStructure.getCompanyYearsOfExistence() } { webSiteStructure.getCompanyName() }</div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure),
    currentSection: PropTypes.string.isRequired,
    sectionChanged: PropTypes.func.isRequired
};

export { Footer };

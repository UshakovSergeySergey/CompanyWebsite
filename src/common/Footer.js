import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    getLinksToSections = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const currentSection = this.props.currentSection;
        const sections = webSiteStructure.getListOfSections();
        const sectionList = sections.map(section => {
            let isActive = '';
            if(currentSection === section.Link)
                isActive = ' active active-menu-item';
            let sectionChanged = (e) => {
                this.props.sectionChanged(section.Link);
            };
            return (
                <li className={ isActive } key={ section.OrdinalNumber }>
                    <Link to={ process.env.PUBLIC_URL + section.Link } onClick={ sectionChanged }>{ section.Name }</Link>
                </li>);
        });
        return (<ul>{ sectionList }</ul>);
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
        return (<React.Fragment>{ linkList }</React.Fragment>);
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <div id='footer-block'>
                <p>copyright</p>
                <p>{ webSiteStructure.getCompanyLegalAddress() }</p>
                <p>{ webSiteStructure.getCompanyEmail() }</p>
                <p>{ webSiteStructure.getCompanyPhoneNumber() }</p>
                { this.getLinksToSections() }
                { this.getLinksToSocialMedia() }
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

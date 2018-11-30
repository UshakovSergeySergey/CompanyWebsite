import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    getLinksToSections = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const sections = webSiteStructure.getListOfSections();
        const sectionList = sections.map(section => {
            return (
                <li key={ section.OrdinalNumber }>
                    <Link to={ process.env.PUBLIC_URL + section.Link }>{ section.Name }</Link>
                </li>
            );
        });
        return (<ul>{ sectionList }</ul>);
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <div id='header-block'>
                <img src='logo.png' alt='Company logo'/>
                { this.getLinksToSections() }
                <p>{ webSiteStructure.getCompanyPhoneNumber() }</p>
                <p>{ webSiteStructure.getCompanyEmail() }</p>
            </div>
        );
    }
}

Header.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { Header };

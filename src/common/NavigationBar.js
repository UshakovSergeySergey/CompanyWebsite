import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
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
        return (
            <div id='navigation-bar'>
                { this.getLinksToSections() }
            </div>
        );
    }
}

NavigationBar.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { NavigationBar };

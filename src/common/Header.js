import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';
import { SectionPathEnum } from '../SectionPathEnum';

class Header extends React.Component {
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
                <li className={ 'nav-item' + isActive } key={ section.OrdinalNumber }>
                    <Link className='nav-link' to={ process.env.PUBLIC_URL + section.Link } onClick={ sectionChanged }>{ section.Name }</Link>
                </li>
            );
        });
        return (<ul className='navbar-nav mr-auto'>{ sectionList }</ul>);
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <div id='header-block'>
                <div className='navbar navbar-expand-lg navbar-light bg-light'>
                    <span className='navbar-brand'>{ webSiteStructure.getCompanyPhoneNumber() }</span>
                    <span className='navbar-brand'>{ webSiteStructure.getCompanyEmail() }</span>
                </div>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <Link to={ process.env.PUBLIC_URL + SectionPathEnum.Main}><img className='navbar-brand' src='logo.png' alt='Company logo'/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        { this.getLinksToSections() }
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure),
    currentSection: PropTypes.string.isRequired,
    sectionChanged: PropTypes.func.isRequired
};

export { Header };

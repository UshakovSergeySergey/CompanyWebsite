import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';
import { SectionPathEnum } from '../SectionPathEnum';

class Header extends React.Component {
    state = {
        navigationBar: null,
        sticky: null
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let bar = document.getElementById('header-navigation-bar');
        let stickyValue = bar.offsetTop;
        this.setState({ navigationBar: bar, sticky: stickyValue});
    }
    handleScroll = () => {
        const { navigationBar, sticky } = this.state;
        if(window.pageYOffset >= sticky)
            navigationBar.classList.add('sticky');
        else
            navigationBar.classList.remove('sticky');
    };
    getLinksToSections = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const currentSection = this.props.currentSection;
        const sections = webSiteStructure.getListOfSections();
        const sectionList = sections.map(section => {
            const isActive = currentSection === section.Link ? 'active' : '';
            let sectionChanged = (e) => {
                this.props.sectionChanged(section.Link);
            };
            return (
                <li className={ isActive } key={ section.OrdinalNumber }>
                    <Link to={ process.env.PUBLIC_URL + section.Link } onClick={ sectionChanged }>{ section.Name }</Link>
                </li>
            );
        });
        return (
            <ul className='nav navbar-nav navbar-right'>
                { sectionList }
            </ul>
        );
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <React.Fragment>
                <div className='navbar-default'>
                    <div className='row'>
                        <div className='col-xs-8'>
                            <Link to={ process.env.PUBLIC_URL + SectionPathEnum.Main }>
                                <img className='navbar-brand' style={ { height: '128px', width: '128px' } } src='logo.svg' alt={ webSiteStructure.getCompanyName() } />
                            </Link>
                        </div>
                        <div className='col-xs-4'>
                            <div className='row'>
                                <a href={ 'tel:' + webSiteStructure.getCompanyPhoneNumber() }>{ webSiteStructure.getCompanyPhoneNumber() }</a>
                            </div>
                            <div className='row'>
                                <a href={ 'mailto:' + webSiteStructure.getCompanyEmail() }>{ webSiteStructure.getCompanyEmail() }</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id='header-navigation-bar' className='navbar navbar-inverse' style={ { zIndex: 99 } }>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#header-navbar'>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                            <Link className='navbar-brand' to={ process.env.PUBLIC_URL + SectionPathEnum.Main }>{ webSiteStructure.getCompanyName() }</Link>
                        </div>

                        <div className='collapse navbar-collapse' id='header-navbar'>
                            { this.getLinksToSections() }
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure),
    currentSection: PropTypes.string.isRequired,
    sectionChanged: PropTypes.func.isRequired
};

export { Header };

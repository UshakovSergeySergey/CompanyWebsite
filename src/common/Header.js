import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';
import { SectionPathEnum } from '../SectionPathEnum';
import { Prettifier } from '../InternalDataTypes/Prettifier';
import { Analytics, ActionTypes } from '../Analytics';

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
            const isActive = currentSection === section.Path ? 'active' : '';
            let sectionChanged = () => {
                Analytics.pageChanged(section.Path);
                this.props.sectionChanged(section.Path);
            };
            return (
                <li className={ isActive } key={ section.OrdinalNumber }>
                    <Link
                        to={ process.env.PUBLIC_URL + section.Path }
                        onClick={ () => { sectionChanged(); Analytics.fireEvent(ActionTypes.LinkClicked, 'Header section \'' + section.Path + '\''); } }
                    >{ section.Name }</Link>
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
        const companyInfo = this.props.webSiteStructure.getCompanyInfo();
        const phoneNumberRaw = companyInfo.getPhoneNumber();
        const phoneNumberPretty = Prettifier.prettifyPhoneNumber(phoneNumberRaw);
        const companyName = companyInfo.getName();
        const email = companyInfo.getEmail();

        let goToMainSection = () => {
            Analytics.pageChanged(SectionPathEnum.Main);
            this.props.sectionChanged(SectionPathEnum.Main);
        };

        return (
            <React.Fragment>
                <div className='navbar-default'>
                    <div className='row'>
                        <div className='col-xs-8'>
                            <Link
                                to={ process.env.PUBLIC_URL + SectionPathEnum.Main }
                                onClick={ () => { goToMainSection(); Analytics.fireEvent(ActionTypes.LinkClicked, 'Header logo')} }
                            >
                                <img className='navbar-brand' style={ { height: '128px', width: '128px' } } src={ process.env.PUBLIC_URL + '/logo.svg' } alt={ companyName } />
                            </Link>
                        </div>
                        <div className='col-xs-4 header-contacts'>
                            <div className='row'>
                                <a
                                    href={ 'tel:' + phoneNumberRaw }
                                    onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Header phone number') } }
                                >{ phoneNumberPretty }</a>
                            </div>
                            <div className='row'>
                                <a
                                    href={ 'mailto:' + email }
                                    onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Header email address') } }
                                >{ email }</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id='header-navigation-bar' className='navbar navbar-inverse' style={ { zIndex: 99 } }>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <button
                                type='button'
                                className='navbar-toggle'
                                data-toggle='collapse'
                                data-target='#header-navbar'
                                onClick={ () => { Analytics.fireEvent(ActionTypes.Toggle, 'Header navigation bar')}}
                            >
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                            <Link
                                className='navbar-brand'
                                to={ process.env.PUBLIC_URL + SectionPathEnum.Main }
                                onClick={ () => { goToMainSection(); Analytics.fireEvent(ActionTypes.LinkClicked, 'Header company name')} }
                            >{ companyName }</Link>
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
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired,
    currentSection: PropTypes.string.isRequired,
    sectionChanged: PropTypes.func.isRequired
};

export { Header };

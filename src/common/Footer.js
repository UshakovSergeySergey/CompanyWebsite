import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Link } from 'react-router-dom';
import { Prettifier } from '../InternalDataTypes/Prettifier';
import { Analytics, ActionTypes } from '../Analytics';

class Footer extends React.Component {
    getLinksToSections = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const currentSection = this.props.currentSection;
        const sections = webSiteStructure.getListOfSections();
        const sectionList = sections.map(section => {
            let isActive = '';
            if(currentSection === section.Path)
                isActive = ' active';
            let sectionChanged = () => {
                Analytics.pageChanged(section.Path);
                this.props.sectionChanged(section.Path);
            };
            return (
                <li className={ 'footer-nav-element' + isActive } key={ section.OrdinalNumber }>
                    <Link
                        className='footer-nav-element-selected'
                        to={ process.env.PUBLIC_URL + section.Path }
                        onClick={ () => { sectionChanged(); Analytics.fireEvent(ActionTypes.LinkClicked, 'Footer section \'' + section.Path + '\''); } }
                    >{ section.Name }</Link>
                </li>);
        });
        return (<ul className='nav navbar-nav'>{ sectionList }</ul>);
    };
    getLinksToSocialMedia = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const links = webSiteStructure.getListOfSocialMedia();
        const linkList = links.map(link => {
            return (
                <a
                    key={ link.OrdinalNumber }
                    href={ link.Link }
                    target='_blank' rel='noopener noreferrer'
                    onClick={ () => { Analytics.fireEvent(ActionTypes.Outbound, link.Link, link.Link)} }
                >
                    <img className='social-media-icon' src={ process.env.PUBLIC_URL + link.PathToImage } alt={ link.Link }/>
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
        const phoneNumberRaw = webSiteStructure.getCompanyInfo().getPhoneNumber();
        const phoneNumberPretty = Prettifier.prettifyPhoneNumber(phoneNumberRaw);
        const companyName = webSiteStructure.getCompanyInfo().getName();
        const email = webSiteStructure.getCompanyInfo().getEmail();
        const legalAddress = webSiteStructure.getCompanyInfo().getLegalAddress().Address;

        const foundationYear = webSiteStructure.getCompanyInfo().getFoundationYear();
        const currentYear = (new Date()).getFullYear();
        const yearsOfExistence = foundationYear === currentYear ? foundationYear : foundationYear + ' - ' + currentYear;

        return (
            <div id='footer-block'>
                <div style={ { color: '#9d9d9d' } }>
                    <div className='row' style={ { paddingTop: '30px' } }>
                        <div className='col-xs-6' style={ { lineHeight: 1.8 } }>
                            <div className='row'>{ companyName }</div>
                            <div className='row'>{ legalAddress }</div>
                            <div className='row footer-contacts'>
                                <a href={ 'mailto:' + email }
                                   onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Footer email address') } }
                                >{ email }</a>
                            </div>
                            <div className='row footer-contacts'>
                                <a
                                    href={ 'tel:' + phoneNumberRaw }
                                    onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Footer phone number') } }
                                >{ phoneNumberPretty }</a>
                            </div>
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
                    <div className='row' style={ { lineHeight: 3.8, textAlign: 'center' } }>© { yearsOfExistence } { companyName }</div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired,
    currentSection: PropTypes.string.isRequired,
    sectionChanged: PropTypes.func.isRequired
};

export { Footer };

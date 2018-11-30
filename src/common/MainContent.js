import React from 'react';
import { MainPage } from '../sections/MainPage';
import { CompanyPage } from '../sections/CompanyPage';
import { ContactsPage } from '../sections/ContactsPage';
import { PortfolioPage } from '../sections/PortfolioPage';
import { ServicesPage } from '../sections/ServicesPage';
import { ClientsPage } from '../sections/ClientsPage';
import { NewsPage } from '../sections/NewsPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { SectionPathEnum } from '../SectionPathEnum';
import { NotFoundPage } from '../sections/NotFoundPage';

class MainContent extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <div id='main-content'>
                <Switch>
                    <Route exact path={ process.env.PUBLIC_URL + '/' }                          render={() => ( <MainPage       webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.Main }         render={() => ( <MainPage       webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.Company }      render={() => ( <CompanyPage    webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.Contacts }     render={() => ( <ContactsPage   webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.Portfolio }    render={() => ( <PortfolioPage  webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.Services }     render={() => ( <ServicesPage   webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.Clients }      render={() => ( <ClientsPage    webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.News }         render={() => ( <NewsPage       webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ process.env.PUBLIC_URL + SectionPathEnum.NotFound }     render={() => ( <NotFoundPage   webSiteStructure={ webSiteStructure } /> )} />
                    <Route render={() => ( <Redirect to={ process.env.PUBLIC_URL + SectionPathEnum.NotFound } /> )} />
                </Switch>
            </div>
        );
    }
}

MainContent.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { MainContent };

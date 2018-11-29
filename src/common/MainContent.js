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
                    <Route exact path='/CompanyName/'               render={() => ( <MainPage       webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.Main }      render={() => ( <MainPage       webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.Company }   render={() => ( <CompanyPage    webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.Contacts }  render={() => ( <ContactsPage   webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.Portfolio } render={() => ( <PortfolioPage  webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.Services }  render={() => ( <ServicesPage   webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.Clients }   render={() => ( <ClientsPage    webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.News }      render={() => ( <NewsPage       webSiteStructure={ webSiteStructure } /> )} />
                    <Route       path={ SectionPathEnum.NotFound }  render={() => ( <NotFoundPage   webSiteStructure={ webSiteStructure } /> )} />
                    <Route                                          render={() => ( <Redirect       to={ SectionPathEnum.NotFound }       /> )} />
                </Switch>
            </div>
        );
    }
}

MainContent.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { MainContent };

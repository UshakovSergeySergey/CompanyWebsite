import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class PortfolioPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Portfolio);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>Портфолио</h1>
            </div>
        );
    }
}

PortfolioPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { PortfolioPage };

import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class ServicesPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Services);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>Услуги</h1>
            </div>
        );
    }
}

ServicesPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired
};

export { ServicesPage };

import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class MainPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Main);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>{ webSiteStructure.MainPage.Caption }</h1>
            </div>
        );
    }
}

MainPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { MainPage };

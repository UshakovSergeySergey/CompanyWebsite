import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class NewsPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.News);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>Новости</h1>
            </div>
        );
    }
}

NewsPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired
};

export { NewsPage };

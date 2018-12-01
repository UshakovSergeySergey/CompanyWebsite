import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class NotFoundPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;
        return (
            <div>
                <h1>{ webSiteStructure.NotFoundPage.Caption }</h1>
            </div>
        );
    }
}

NotFoundPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { NotFoundPage };

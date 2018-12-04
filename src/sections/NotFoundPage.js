import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Страница не найдена</h1>
            </div>
        );
    }
}

NotFoundPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired
};

export { NotFoundPage };

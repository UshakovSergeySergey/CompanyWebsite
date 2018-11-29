import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <p><b>СТРАНИЦА НЕ НАЙДЕНА</b></p>
            </div>
        );
    }
}

NotFoundPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { NotFoundPage };

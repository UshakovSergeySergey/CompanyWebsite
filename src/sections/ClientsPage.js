import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';

class ClientsPage extends React.Component {
    getClientLogos = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const logos = webSiteStructure.getListOfClientLogos();

        const logoList = logos.map(logo => {
            return (
                <img key={ logo.OrdinalNumber } className='client-logo' src={ process.env.PUBLIC_URL + logo.PathToImage } alt={ logo.Name } />
            );
        });
        return (<div>{ logoList }</div>);
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Clients);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>Наши клиенты</h1>
                <p>можно пару слов о том какие у нас крутые клиенты, какие они респектабельные, какие мы респектабельные и надёжные, мол нам доверяют</p>
                <h2>Нам доверяют:</h2>
                { this.getClientLogos() }
            </div>
        );
    }
}

ClientsPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired
};

export { ClientsPage };

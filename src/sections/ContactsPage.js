import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Map } from '../Map';

class ContactsPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Contacts);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>{ webSiteStructure.ContactsPage.Caption }</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Юридический телефон:</td>
                            <td>{ webSiteStructure.getCompanyPhoneNumber() }</td>
                        </tr>
                        <tr>
                            <td>Факс:</td>
                            <td>{ webSiteStructure.getCompanyFaxNumber() }</td>
                        </tr>
                        <tr>
                            <td>Юридический адрес:</td>
                            <td>{ webSiteStructure.getCompanyLegalAddress() }</td>
                        </tr>
                        <tr>
                            <td>Адрес офиса:</td>
                            <td>{ webSiteStructure.getCompanyOfficeAddress() }</td>
                        </tr>
                        <tr>
                            <td>Почтовый адрес:</td>
                            <td>{ webSiteStructure.getCompanyMailCorrespondenceAddress() }</td>
                        </tr>
                        <tr>
                            <td>Время работы:</td>
                            <td>{ webSiteStructure.getCompanyWorkingHours() }</td>
                        </tr>
                        <tr>
                            <td>Адрес электронной почты:</td>
                            <td>{ webSiteStructure.getCompanyEmail() }</td>
                        </tr>
                    </tbody>
                </table>
                <Map />
            </div>
        );
    }
}

ContactsPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { ContactsPage };

/*
    - телефон наш или менеджеров
	- может фоточки, может инструкция как добраться
	- возможно форма для того чтоб можно было быстро отправить письмо, или запросить обратный звонок
	- реквизиты компании (название ооо, инн, кпп и т.д.)
*/
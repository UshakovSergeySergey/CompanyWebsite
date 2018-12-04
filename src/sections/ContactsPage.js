import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Map } from '../Map';
import { Prettifier } from '../InternalDataTypes/Prettifier';
import { Address } from '../InternalDataTypes/Address';
import { RequisiteName } from '../InternalDataTypes/CompanyRequisites';
import { ActionTypes, Analytics } from '../Analytics';

class ContactsPage extends React.Component {
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Contacts);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        const phoneNumberRaw = webSiteStructure.getCompanyInfo().getPhoneNumber();
        const phoneNumberPretty = Prettifier.prettifyPhoneNumber(phoneNumberRaw);
        const faxNumberRaw = webSiteStructure.getCompanyInfo().getFaxNumber();
        const faxNumberPretty = Prettifier.prettifyPhoneNumber(faxNumberRaw);
        const legalAddress = webSiteStructure.getCompanyInfo().getLegalAddress().Address;
        const officeAddress = webSiteStructure.getCompanyInfo().getOfficeAddress();
        const correspondenceAddress = webSiteStructure.getCompanyInfo().getCorrespondenceAddress().Address;
        const workingHours = webSiteStructure.getCompanyInfo().getWorkingHours();
        const email = webSiteStructure.getCompanyInfo().getEmail();

        const requisites = webSiteStructure.getCompanyRequisites();

        return (
            <div>
                <div className='row'>
                    <div className='col-xs-6'>
                        <h2>Контакты</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Юридический телефон:</td>
                                    <td>
                                        <span className='employee-contacts'>
                                            <a
                                                href={ 'tel:' + phoneNumberRaw }
                                                onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Contacts phone number') } }
                                            >{ phoneNumberPretty }</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Факс:</td>
                                    <td>
                                        <span className='employee-contacts'>
                                            <a
                                                href={ 'tel:' + faxNumberRaw }
                                                onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Contacts fax number') } }
                                            >{ faxNumberPretty }</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Юридический адрес:</td>
                                    <td>{ legalAddress }</td>
                                </tr>
                                <tr>
                                    <td>Адрес офиса:</td>
                                    <td>{ officeAddress.Address }</td>
                                </tr>
                                <tr>
                                    <td>Почтовый адрес:</td>
                                    <td>{ correspondenceAddress }</td>
                                </tr>
                                <tr>
                                    <td>Время работы:</td>
                                    <td>{ workingHours }</td>
                                </tr>
                                <tr>
                                    <td>Адрес электронной почты:</td>
                                    <td>
                                        <span className='employee-contacts'>
                                            <a
                                                href={ 'mailto:' + email }
                                                onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Contacts email address') } }
                                            >{ email }</a></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-xs-6'>
                        <h2>Реквизиты</h2>
                        <table>
                            <tbody>
                            <tr>
                                <td>{ RequisiteName.TaxIdentificationNumber + ':'}</td>
                                <td>{ requisites.getTaxIdentificationNumber() }</td>
                            </tr>
                            <tr>
                                <td>{ RequisiteName.RegistrationReasonCode + ':'}</td>
                                <td>{ requisites.getRegistrationReasonCode() }</td>
                            </tr>
                            <tr>
                                <td>{ RequisiteName.CheckingAccount + ':'}</td>
                                <td>{ requisites.getCheckingAccount() }</td>
                            </tr>
                            <tr>
                                <td>{ RequisiteName.CorrespondentAccount + ':'}</td>
                                <td>{ requisites.getCorrespondentAccount() }</td>
                            </tr>
                            <tr>
                                <td>{ RequisiteName.BankIdentificationCode + ':'}</td>
                                <td>{ requisites.getBankIdentificationCode() }</td>
                            </tr>
                            <tr>
                                <td>{ RequisiteName.PrimaryStateRegistrationNumber + ':'}</td>
                                <td>{ requisites.getPrimaryStateRegistrationNumber() }</td>
                            </tr>
                            <tr>
                                <td>{ RequisiteName.IdentifierOfEnterprisesAndOrganizations + ':'}</td>
                                <td>{ requisites.getIdentifierOfEnterprisesAndOrganizations() }</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <Map address={ Object.assign(new Address(), officeAddress) }/>
                </div>
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
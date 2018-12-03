let RequisiteName = Object.freeze({
    TaxIdentificationNumber: 'ИНН',
    RegistrationReasonCode: 'КПП',
    CheckingAccount: 'Расчётный счёт',
    CorrespondentAccount: 'Корреспондентский счёт',
    BankIdentificationCode: 'БИК',
    PrimaryStateRegistrationNumber: 'ОГРН',
    IdentifierOfEnterprisesAndOrganizations: 'ОКПО'
});

class CompanyRequisites {
    constructor() {
        this.TaxIdentificationNumber = '';
        this.RegistrationReasonCode = '';
        this.CheckingAccount = '';
        this.CorrespondentAccount = '';
        this.BankIdentificationCode = '';
        this.PrimaryStateRegistrationNumber = '';
        this.IdentifierOfEnterprisesAndOrganizations = '';
    }
    getTaxIdentificationNumber = () => {
        return this.TaxIdentificationNumber;
    };
    getRegistrationReasonCode = () => {
        return this.RegistrationReasonCode;
    };
    getCheckingAccount = () => {
        return this.CheckingAccount;
    };
    getCorrespondentAccount = () => {
        return this.CorrespondentAccount;
    };
    getBankIdentificationCode = () => {
        return this.BankIdentificationCode;
    };
    getPrimaryStateRegistrationNumber = () => {
        return this.PrimaryStateRegistrationNumber;
    };
    getIdentifierOfEnterprisesAndOrganizations = () => {
        return this.IdentifierOfEnterprisesAndOrganizations;
    };
}

export { CompanyRequisites, RequisiteName };

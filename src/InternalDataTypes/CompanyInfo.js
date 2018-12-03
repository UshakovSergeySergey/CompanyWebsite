import { Address } from './Address';

class CompanyInfo {
    constructor() {
        this.PhoneNumber = '';
        this.FaxNumber = '';
        this.EMail = '';
        this.Name = '';
        this.LegalAddress = new Address();
        this.OfficeAddress = new Address();
        this.CorrespondenceAddress = new Address();
        this.WorkingHours = '';
        this.FoundationYear = 2018;
    }
    getPhoneNumber = () => {
        return this.PhoneNumber;
    };
    getFaxNumber = () => {
        return this.FaxNumber;
    };
    getEmail = () => {
        return this.EMail;
    };
    getName = () => {
        return this.Name;
    };
    getLegalAddress = () => {
        return this.LegalAddress;
    };
    getOfficeAddress = () => {
        return this.OfficeAddress;
    };
    getCorrespondenceAddress = () => {
        return this.CorrespondenceAddress;
    };
    getWorkingHours = () => {
        return this.WorkingHours;
    };
    getFoundationYear = () => {
        return this.FoundationYear;
    };
}

export { CompanyInfo };

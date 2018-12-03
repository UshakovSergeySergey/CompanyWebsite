import { CompanyInfo } from './InternalDataTypes/CompanyInfo';
import { CompanyRequisites } from './InternalDataTypes/CompanyRequisites';

class WebSiteStructure {
    constructor() {
        this.CompanyInfo = new CompanyInfo();
        this.CompanyRequisites = new CompanyRequisites();
        this.Sections = [];
        this.SocialMedias = [];
        this.Clients = [];
        this.Employees = [];
    }
    getCompanyInfo = () => {
        return this.CompanyInfo;
    };
    getCompanyRequisites = () => {
        return this.CompanyRequisites;
    };
    getListOfSections = () => {
        let sections = this.Sections.filter(site => !site.IsHidden);
        sections.sort((a, b) => {
            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;
            return 0;
        });
        return sections;
    };
    getListOfSocialMedia = () => {
        let links = this.SocialMedias.filter(link => !link.IsHidden);
        links.sort((a, b) => {
            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;
            return 0;
        });
        return links;
    };
    getListOfClientLogos = () => {
        let logos = this.Clients.filter(client => !client.IsHidden);
        logos.sort((a, b) => {
            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;
            return 0;
        });
        return logos;
    };
    getListOfKeyEmployees = () => {
        let employees = this.Employees.filter(employee => !employee.IsHidden);
        employees.sort((a, b) => {
            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;
            return 0;
        });
        return employees;
    };

    sectionIsVisible = (sectionPath) => {
        let section = this.Sections.find(section => section.Path === sectionPath);
        if(section)
            return !section.IsHidden;
        return false;
    };
}

export { WebSiteStructure };

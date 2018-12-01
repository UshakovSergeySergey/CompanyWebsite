class WebSiteStructure {
    constructor() {
        this.CompanyPhoneNumber = '';
        this.CompanyEmail = '';
        this.CompanyLegalAddress = '';
        this.CompanyOfficeAddress = '';
        this.CompanyMailCorrespondenceAddress = '';
        this.CompanyFaxNumber = '';
        this.CompanyWorkingHours = '';
        this.WebSiteSections = [];
        this.LinksToSocialMedia = [];

        this.MainPage = {};
        this.CompanyPage = {};
        this.ContactsPage = {};
        this.PortfolioPage = {};
        this.ServicesPage = {};
        this.ClientsPage = {};
        this.NewsPage = {};
        this.NotFoundPage = {};
    }
    getCompanyName = () => {
        return 'ООО «Наша Компания»';
    };
    getCompanyYearsOfExistence = () => {
        return '2018';
    };
    getListOfSections = () => {
        let sections = this.WebSiteSections.filter(site => !site.IsHidden);
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
        let links = this.LinksToSocialMedia.filter(link => !link.IsHidden);
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
        let logos = this.ClientsPage.ClientLogos.filter(client => !client.IsHidden);
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
        let employees = this.CompanyPage.KeyEmployees.filter(employee => !employee.IsHidden);
        employees.sort((a, b) => {
            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;
            return 0;
        });
        return employees;
    };
    sectionIsVisible = (sectionLink) => {
        let section = this.WebSiteSections.find(section => section.Link === sectionLink);
        if(section)
            return !section.IsHidden;
        return false;
    };
    getCompanyPhoneNumber = () => {
        return this.CompanyPhoneNumber;
    };
    getCompanyEmail = () => {
        return this.CompanyEmail;
    };
    getCompanyLegalAddress = () => {
        return this.CompanyLegalAddress;
    };
    getCompanyOfficeAddress = () => {
        return this.CompanyOfficeAddress;
    };
    getCompanyMailCorrespondenceAddress = () => {
        return this.CompanyMailCorrespondenceAddress;
    };
    getCompanyFaxNumber = () => {
        return this.CompanyFaxNumber;
    };
    getCompanyWorkingHours = () => {
        return this.CompanyWorkingHours;
    };
}

export { WebSiteStructure };

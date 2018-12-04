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
        this.Projects = [];
    }
    getCompanyInfo = () => {
        return this.CompanyInfo;
    };
    getCompanyRequisites = () => {
        return this.CompanyRequisites;
    };
    getListOfSections = () => {
        return this.filterVisibleAndSort(this.Sections);
    };
    getListOfSocialMedia = () => {
        return this.filterVisibleAndSort(this.SocialMedias);
    };
    getListOfClientLogos = () => {
        return this.filterVisibleAndSort(this.Clients);
    };
    getListOfKeyEmployees = () => {
        return this.filterVisibleAndSort(this.Employees);
    };
    getListOfProjects = () => {
        let projects = this.Projects.filter(project => !project.IsHidden);
        projects.sort((a, b) => {
            let firstDate = new Date(a.Date);
            firstDate.setHours(0, 0, 0, 0);

            let secondDate = new Date(b.Date);
            secondDate.setHours(0, 0, 0, 0);

            if(firstDate < secondDate)
                return -1;
            if(secondDate < firstDate)
                return 1;

            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;

            return 0;
        });
    };
    getProjectByPath = (path) => {
        const project = this.Projects.find(project => project.Path === path);
        return project;
    };

    sectionIsVisible = (sectionPath) => {
        let section = this.Sections.find(section => section.Path === sectionPath);
        if(section)
            return !section.IsHidden;
        return false;
    };
    filterVisibleAndSort = (items) => {
        let filteredItems = items.filter(item => !item.IsHidden);
        filteredItems.sort((a, b) => {
            if(a.OrdinalNumber < b.OrdinalNumber)
                return -1;
            if(b.OrdinalNumber < a.OrdinalNumber)
                return 1;
            return 0;
        });
        return filteredItems;
    }
}

export { WebSiteStructure };

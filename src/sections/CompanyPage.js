import React from 'react';
import { SectionPathEnum } from '../SectionPathEnum';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { Employee } from '../Employee';
import { EmployeeData } from '../EmployeeData';

class CompanyPage extends React.Component {
    getKeyEmployees = () => {
        const webSiteStructure = this.props.webSiteStructure;
        const employees = webSiteStructure.getListOfKeyEmployees();

        const employeeList = employees.map(employee => {
            return (
                <Employee key={ employee.OrdinalNumber } data={ Object.assign(new EmployeeData(), employee) } />
            );
        });
        return (<div>{ employeeList }</div>);
    };
    render() {
        const webSiteStructure = this.props.webSiteStructure;

        const sectionIsVisible = webSiteStructure.sectionIsVisible(SectionPathEnum.Company);
        if(!sectionIsVisible)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>О компании</h1>
                <p>текст с описанием того, какие мы успешные и прочий маркетинговый текст, когда основана, статистика по проектам, может инфа по количеству сотрудников</p>
                { this.getKeyEmployees() }
            </div>
        );
    }
}

CompanyPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure)
};

export { CompanyPage };

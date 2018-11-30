import React from 'react';
import PropTypes from 'prop-types';
import { EmployeeData } from './EmployeeData';

class Employee extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <div>
                <div style={ { float: 'left' } }>
                    <img style={ { height: '128px', width: '128px' } } src={ process.env.PUBLIC_URL + data.Photo } alt={ data.Name }/>
                </div>
                <div>
                    <p><b>ФИО:</b> { data.Name }</p>
                    <p><b>Должность:</b> { data.Position }</p>
                    <p><b>Телефон:</b> { data.PhoneNumber }</p>
                    <p><b>Почта:</b> { data.Email }</p>
                    <br /><br />
                </div>
            </div>
        );
    }
}

Employee.propTypes = {
    data: PropTypes.instanceOf(EmployeeData)
};

export { Employee };

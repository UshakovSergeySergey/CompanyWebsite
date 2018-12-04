import React from 'react';
import PropTypes from 'prop-types';
import { EmployeeData } from './EmployeeData';
import { Prettifier } from './InternalDataTypes/Prettifier';
import { Analytics, ActionTypes } from './Analytics';

class Employee extends React.Component {
    render() {
        const data = this.props.data;
        const phoneNumberRaw = data.PhoneNumber;
        const phoneNumberPretty = Prettifier.prettifyPhoneNumber(phoneNumberRaw);
        const email = data.EMail;

        return (
            <div>
                <div style={ { float: 'left' } }>
                    <img style={ { height: '128px', width: '128px' } } src={ process.env.PUBLIC_URL + data.PathToPhoto } alt={ data.Name }/>
                </div>
                <div>
                    <p><b>ФИО:</b> { data.FullName }</p>
                    <p><b>Должность:</b> { data.Position }</p>
                    <p className='employee-contacts'>
                        <b>Телефон:</b> <a
                            href={ 'tel:' + phoneNumberRaw }
                            onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Employee phone number \'' + data.FullName + '\'') } }
                        >{ phoneNumberPretty }</a>
                    </p>
                    <p className='employee-contacts'>
                        <b>Почта:</b> <a
                            href={ 'mailto:' + email }
                            onClick={ () => { Analytics.fireEvent(ActionTypes.LinkClicked, 'Employee email address \'' + data.FullName + '\'') } }
                        >{ email }</a>
                    </p>
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

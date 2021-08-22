import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
InputCodeSale.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputCodeSale.defaultProps = {
    type: 'text',
    placeholder: '',
    disabled: false,
}

function InputCodeSale(props) {
    const { field, form, label, placeholder,  type } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            <input  
                id={name}
                {...field}
                type={type}
                placeholder={placeholder}
                className={showError ? 'is-invalid' : ''}
            />
             <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputCodeSale;
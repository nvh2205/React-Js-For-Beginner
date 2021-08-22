import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputPhoneField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputPhoneField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputPhoneField(props) {

    const { field,form, label, placeholder,disabled,type } = props;
    const {name}=field;
    const {errors,touched}=form;
    const showError = errors[name] && touched[name];

    
    return (
        <FormGroup className="col-sm-6 col-xs-12">
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className={showError ? 'is-invalid' : ''}

            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputPhoneField;
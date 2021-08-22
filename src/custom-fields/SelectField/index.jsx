import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import {ErrorMessage} from 'formik'

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}


function SelectField(props) {

    const { field, options, label, placeholder, disabled,form , handleDistrict} = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const selectedOption = options.find(option => option.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };

        handleDistrict(changeEvent)

        field.onChange(changeEvent);
    }

    

    return (
        <FormGroup className="col-sm-4 col-xs-12">
            <Select
                id={name}
                {...field}
                value={selectedOption}
                
                placeholder={placeholder}
                onChange={handleSelectedOptionChange}
                isDisabled={disabled}
                options={options}
                className={showError ? 'is-invalid' : ''}

            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;
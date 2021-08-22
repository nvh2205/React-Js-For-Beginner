import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik'

SelectWardsField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

SelectWardsField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}


function SelectWardsField(props) {

    const { field, options, label, placeholder, disabled, form } = props;
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

export default SelectWardsField;
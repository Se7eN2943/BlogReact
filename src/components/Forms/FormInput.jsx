import React, { forwardRef } from 'react';

const FormInput = forwardRef((props, ref) => {
    const { name, label, errors, errorMessage, ...other } = props
    return (
        <div className="form_input">
            <label className="form_input__label" htmlFor={name}>{label}</label>
            <input
                style={errors[name] && { borderColor: '#F5222D' }}
                name={name}
                ref={ref}
                {...other}
            />
            <div className="form_input_error">
                {errors[name] && <span>{errors[name]?.message || 'The field is required'}</span>}
            </div>
        </div>
    );
});

export default FormInput

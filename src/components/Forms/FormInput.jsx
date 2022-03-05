import React, { forwardRef } from 'react';

const FormInput = forwardRef((props, ref) => {
  const { inputClass, name, label, errors, ...other } = props;
  return (
    <div className={`form_input ${inputClass}`}>
      <label className="form_input__label" htmlFor={name}>
        {label}
      </label>
      {name === 'textarea' ? (
        <textarea style={errors[name] && { borderColor: '#F5222D' }} name={name} ref={ref} {...other} />
      ) : (
        <input style={errors[name] && { borderColor: '#F5222D' }} name={name} ref={ref} {...other} />
      )}
      {errors && (
        <div className="form_input_error">
          {errors[name] && <span>{errors[name]?.message || 'The field is required'}</span>}
        </div>
      )}
    </div>
  );
});

export default FormInput;

import React from 'react';

const TittleInput = ({ name, label, ...other }) => {
    return (

        <div className="form_input article-form_input">
            <label className="form_input__label" htmlFor={name}>
                {label}
                {name === 'textarea' ? <textarea name={name} {...other} /> : <input name={name} {...other} />}
            </label>
        </div>
    );
}

export default TittleInput

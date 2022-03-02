import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import FormInput from './FormInputs/FormInput'
import { connect } from 'react-redux'


const SingUp = () => {

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onBlur' });

    const [checked, setChecked] = useState(false)

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="form shadow-box">
            <h5>  Create new account </h5>
            <form className='form_form' onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    errors={errors}
                    placeholder='Username'
                    name='username'
                    label='Username'
                    {...register("username", {
                        required: true
                    })}
                />
                <FormInput
                    errors={errors}
                    placeholder='Email address'
                    name='email'
                    label='Email address'
                    type='email'
                    {...register("email", {
                        required: true
                    })}
                />
                <FormInput
                    errors={errors}
                    placeholder='Password'
                    name='password'
                    label='Password'
                    type='password'
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: 'Your password needs to be at least 6 characters.'
                        }
                    })}
                />
                <FormInput
                    errors={errors}
                    placeholder='Password'
                    name='repeatPassword'
                    label='Repeat Password'
                    type='password'
                    {...register("repeatPassword", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: 'Your password needs to be at least 6 characters.'
                        },
                        validate: value => value === watch("password") || 'Passwords must match'
                    })}
                />
                <div className="form_line"></div>
                <div className="form_checkbox">

                    <Checkbox onChange={e => setChecked(e.target.checked)}>
                        <div className="form_checkbox_label" >I agree to the processing of my personal information</div>
                    </Checkbox>


                    <div className="form_input_error">
                        {errors?.checkbox && <span>{errors?.checkbox?.message}</span>}
                    </div>
                </div>

                <button
                    className="form_submit"
                    type="submit"
                    disabled={!isValid && !checked}
                    style={!checked ? { opacity: 0.5 } : { opacity: 1 }}
                >
                    Create
                </button>
                <div className="form_footer">
                    Already have an account?
                    <span> <Link to='/sign-in'>Sign In.</Link> </span>
                </div>
            </form >
        </div >
    )
}

// const mapStateToProps = (state) => {
//     return {
//         article: state.article
//     }
// }

// export default connect(mapStateToProps)(AlloneArticle)
export default SingUp
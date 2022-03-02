import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import FormInput from './FormInputs/FormInput'
import blogAPI from '../../services'
import { setSignIn, setUserImg } from '../../redux/actions'

const registerAPI = new blogAPI()

const SingUp = ({ setSignIn, setUserImg }) => {

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onBlur' });

    const [checked, setChecked] = useState(false)

    const onSubmit = async data => {
        const user = {
            user: {
                username: data.username,
                email: data.email,
                password: data.password
            }
        }

        await registerAPI.registerNewUser(user).then(res => {
            setSignIn(res.user)
            registerAPI.getUserProfile(res.user.username).then(res => setUserImg(res.profile.image))
        })
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
                        required: true,
                        minLength: {
                            value: 6,
                            message: 'Your username needs to be at least 6 characters.'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Your username must be no more than 20 characters.'
                        }
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

const mapStateToProps = state => {
    return {
        username: state.username,
    }
}

export default connect(mapStateToProps, { setSignIn, setUserImg })(SingUp)
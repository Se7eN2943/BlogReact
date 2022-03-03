import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FormInput from './FormInput'
import blogAPI from '../../services'
import { setSignIn, setUserImg } from '../../redux/actions'

const signInAPI = new blogAPI()

const SingIn = ({setSignIn, token, setUserImg}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

        const onSubmit = data => {
            const user = {
                user: {
                    email: data.email,
                    password: data.password
                }
            }
            
            signInAPI.signInUser(user).then(res => {
                setSignIn(res.user)
                signInAPI.getUserProfile(res.user.username).then(res => setUserImg(res.profile.image))
            })
            
        };

    return (
        <div className="form shadow-box">
            <h5> Sign In </h5>
            <form className='form_form' onSubmit={handleSubmit(onSubmit)}>
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
                        required: true
                    })}
                />
                <button className="form_submit" type="submit">Login</button>
                <div className="form_footer">
                    Already have an account?
                    <span><Link to='/sign-up'>Sign Up.</Link></span>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps, {setSignIn, setUserImg})(SingIn)
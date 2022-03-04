import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import FormInput from './FormInput'
import blogAPI from '../../services'
import { setSignIn, setUserImg } from '../../redux/actions'
import setLocalHost from '../../utiles'

const blog = new blogAPI()

const SingIn = ({ setSignIn, setUserImg, username, email, token, image, auth }) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        const user = {
            user: {
                email: data.email,
                password: data.password
            }
        }

        await blog.signInUser(user).then(res => {
            setSignIn(res.user)
            blog.getUserProfile(res.user.username).then(res => setUserImg(res.profile.image))
        })

        setLocalHost(username, email, token, image, auth)
        navigate('/articles')
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
        username: state.username,
        token: state.token,
        email: state.email,
        image: state.image,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { setSignIn, setUserImg })(SingIn)
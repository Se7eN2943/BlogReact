import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import FormInput from './FormInputs/FormInput'
import blogAPI from '../../services'
import { setSignIn, setUserImg } from '../../redux/actions'

const EditProfile = ({ username, email, image }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userName, setUserName] = useState(username)
    const [userEmail, setUserEmail] = useState(email)
    const [userAvatar, setUserAvatar] = useState(image)

    const onChange = (e) => {
            console.log(e.target.value)
    }

    const onSubmit = data => {
        // const user = {
        //     user: {
        //         email: data.email,
        //         password: data.password
        //     }
        // }

        // signInAPI.signInUser(user).then(res => {
        //     setSignIn(res.user)
        //     signInAPI.getUserProfile(res.user.username).then(res => setUserImg(res.profile.image))
        // })

    };

    return (
        <div className="form shadow-box">
            <h5>  Edit Profile </h5>
            <form className='form_form' onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    onKeyUp={onChange}
                    value={userName}
                    errors={errors}
                    placeholder='Username'
                    name='username'
                    label='Username'
                    {...register("username", {
                        required: true
                    })}
                />
                <FormInput
                    onKeyUp={onChange}
                    value={userEmail}
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
                    onKeyUp={onChange}
                    errors={errors}
                    placeholder='New password'
                    name='password'
                    label='New password'
                    type='password'
                    {...register("password", {
                        required: true
                    })}
                />
                <FormInput
                    onKeyUp={onChange}
                    value={userAvatar}
                    errors={errors}
                    placeholder='Avatar image'
                    name='avatar'
                    label='Avatar image'
                    type='URL'
                    {...register("avatar", {
                        required: true
                    })}
                />

                <button className="form_submit" type="submit">Save</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        email: state.email,
        image: state.image,
    }
}

export default connect(mapStateToProps)(EditProfile)
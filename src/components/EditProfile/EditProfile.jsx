import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import FormInput from '../Forms/FormInput';
import BlogAPI from '../../services/services';
import { setSignIn, setUserImg } from '../../redux/actions';

const blog = new BlogAPI();

function EditProfile({ username, email, image, token, setSignIn, setUserImg }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userName, setUserName] = useState(username);
  const [userEmail, setUserEmail] = useState(email);
  const [userAvatar, setUserAvatar] = useState(image);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    let user
    if (data.password.trim().length === 0) {
      user = {
        user: {
          username: data.username,
          email: data.email,
          image: data.avatar
        },
      };
    } else {
      user = {
        user: {
          username: data.username,
          email: data.email,
          password: data.password,
          image: data.avatar
        },
      };
    }
    blog.putUserProfile(token, user).then(({ user }) => {
      const putUser = {
        username: user.username,
        email: user.email,
        token: user.token,
      };
      setSignIn(putUser);
      setUserImg(user.image);
      navigate('/articles');
    });
  };

  return (
    <div className="form shadow-box">
      <h5> Edit Profile </h5>
      <form className="form_form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          onInput={(e) => setUserName(e.target.value)}
          value={userName}
          errors={errors}
          placeholder="Username"
          name="username"
          label="Username"
          {...register('username', {
            required: true,
          })}
        />
        <FormInput
          onInput={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          errors={errors}
          placeholder="Email address"
          name="email"
          label="Email address"
          type="email"
          {...register('email', {
            required: true,
          })}
        />
        <FormInput
          errors={errors}
          placeholder="New password"
          name="password"
          label="New password"
          type="password"
          {...register('password', {
            minLength: {
              value: 6,
              message: 'Your password needs to be at least 6 characters.',
            },
            maxLength: {
              value: 40,
              message: 'Your username must be no more than 40 characters.',
            },
          })}
        />
        <FormInput
          onInput={(e) => setUserAvatar(e.target.value)}
          value={userAvatar}
          errors={errors}
          placeholder="Avatar image"
          name="avatar"
          label="Avatar image"
          type="URL"
          {...register('avatar', {
            required: true,
            pattern: /.jpg$|.png$/i,
          })}
        />
        <button className="form_submit" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    email: state.email,
    image: state.image,
    token: state.token,
  };
};

export default connect(mapStateToProps, { setSignIn, setUserImg })(EditProfile);

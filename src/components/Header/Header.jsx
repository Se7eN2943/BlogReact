import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLogOut } from '../../redux/actions';

function NonAuthHeader() {
  return (
    <div className="autoris-buttons">
      <Link to="/sign-in">
        <button className="sign-in-button">Sign in </button>
      </Link>
      <Link to="/sign-up">
        <button className="sign-up-button color-button">Sign Up</button>
      </Link>
    </div>
  );
}

function AuthHeader({ username, setLogOut, image }) {
  const navigate = useNavigate();

  return (
    <div className="autoris-block">
      <Link to="/new-article">
        <button className="create-button color-button">Create article </button>
      </Link>
      <div className="username">{username}</div>
      <div className="user-img">
        <Link to="/profile">
          <img src={image} alt="Profile IMG" />
        </Link>
      </div>
      <Link
        onClick={() => {
          localStorage.clear();
          setLogOut();
          navigate('/articles', { replace: true });
        }}
        to="/"
      >
        <button className="log-out-button color-button">Log Out</button>
      </Link>
    </div>
  );
}

function Header({ auth, username, setLogOut, image, getAllArticles }) {
  return (
    <header>
      <Link to="/articles">
        <h6 onClick={getAllArticles}>Realworld Blog</h6>
      </Link>
      {auth ? (
        <AuthHeader getAllArticles={getAllArticles} image={image} username={username} setLogOut={setLogOut} />
      ) : (
        <NonAuthHeader />
      )}
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    username: state.username,
    image: state.image,
  };
};

export default connect(mapStateToProps, { setLogOut })(Header);

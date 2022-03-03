import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogOut } from '../../redux/actions'

const NonAuthHeader = () => {
    return (
        <div className="autoris-buttons">
            <Link to='/sign-in'>
                <button className='sign-in-button'>Sign in </button>
            </Link>
            <Link to='/sign-up'>
                <button className='sign-up-button color-button'>Sign Up</button>
            </Link>
        </div>
    )
}

const AuthHeader = ({ username, setLogOut, image }) => {

    return (
        <div className="autoris-block">
            <Link to='/new-article'>
                <button className='create-button color-button'>Create article </button>
            </Link>
            <div className="username">
                {username}
            </div>
            <div className="user-img">
                <Link to='/profile'><img src={image} alt="Profile IMG" /></Link>
            </div>
            <Link onClick={() => setLogOut()} to='/' >
                <button className='log-out-button color-button'>Log Out</button>
            </Link>
        </div>
    )
}

const Header = ({ auth, username, setLogOut, image, getAllArticles }) => {

    return (
        <header onClick={getAllArticles}>
            <Link to='/articles'>
                <h6>
                    Realworld Blog
                </h6>
            </Link>

            {auth ? <AuthHeader image={image} username={username} setLogOut={setLogOut} /> : <NonAuthHeader />}
        </header>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        username: state.username,
        image: state.image
    }
}

export default connect(mapStateToProps, { setLogOut })(Header)
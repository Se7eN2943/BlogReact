import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogOut } from '../../actions'
import acc from './user_photo.png'

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

const AuthHeader = ({ username, setLogOut }) => {

    return (
        <div className="autoris-block">
            <Link to='/new-article'>
                <button className='create-button color-button'>Create article </button>
            </Link>
            <div className="username">
                {username}
            </div>
            <div className="user-img">
                <Link to='/profile'><img src={acc} alt="Profile IMG" /></Link>
            </div>
            <Link onClick={() => setLogOut()} to='/'>
                <button className='log-out-button color-button'>Log Out</button>
            </Link>
        </div>
    )
}

const Header = ({ auth, username, setLogOut }) => {

    return (
        <header>
            <h6>
                <Link to='/'>Realworld Blog</Link>
            </h6>
            {auth ? <AuthHeader username={username} setLogOut={setLogOut} /> : <NonAuthHeader />}
        </header>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        username: state.username,
    }
}

export default connect(mapStateToProps, { setLogOut })(Header)
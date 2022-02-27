import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogOut } from '../../actions'
import acc from './user_photo.png'

const NonAuthHeader = () => {
    return (
        <div className="autoris-buttons">
            <button className='sign-in-button'>
                <Link to='/sign-in'>Sign in</Link>
            </button>
            <button className='sign-up-button color-button'>
                <Link to='/sign-up'>Sign Up</Link>
            </button>
        </div>
    )
}

const AuthHeader = ({ username, setLogOut }) => {

    return (
        <div className="autoris-block">
            <button className='create-button color-button'>
                <Link to='/new-article'>Create article</Link>
            </button>
            <div className="username">
                {username}
            </div>
            <div className="user-img">
                <Link to='/profile'><img src={acc} alt="Profile IMG" /></Link>
            </div>
            <button className='log-out-button color-button'>
                <Link onClick={() => setLogOut()} to='/'>Log Out</Link>
            </button>
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
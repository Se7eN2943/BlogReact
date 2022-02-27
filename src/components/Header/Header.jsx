import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <header>
            <h6>
                <Link to='/'>Realworld Blog</Link>
            </h6>
            <div className="autoris-buttons">
                <button className='sign-in-button'>
                    <Link to='/sign-in'>Sign in</Link>
                </button>
                <button className='sign-up-button color-button'>
                    <Link to='/sign-up'>Sign Up</Link>
                </button>
            </div>
        </header>
    )
}

export default Header
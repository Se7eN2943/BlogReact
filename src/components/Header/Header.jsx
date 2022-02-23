import React from 'react';

const Header = () => {


    return (
        <header>
            <h6>
                Realworld Blog
            </h6>
            <div className="autoris-buttons">
                <button className='sign-in-button'>
                    Sign in
                </button>
                <button className='sign-up-button color-button'>
                    Sign Up
                </button>
            </div>
        </header>
    )
}

export default Header
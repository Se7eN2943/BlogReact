import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const SingIn = () => {

    return (
        <div className="form shadow-box">
            <h5> Sign In </h5>
            <form className='form_form' action="">
                <div className="form_input">
                    <label className="form_input__label" htmlFor="email">Email address</label>
                    <input placeholder='Email address' name='email' id='email' type="email" />
                </div>
                <div className="form_input">
                    <label className="form_input__label" htmlFor="password">Password</label>
                    <input placeholder='Password' name='password' id='password' type="password" />
                </div>
                <button className="form_submit" type="submit">Create</button>
                <div className="form_footer">
                    Already have an account?
                    <span> <Link to='`articles'>Sign Up.</Link> </span>
                </div>
            </form>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         article: state.article
//     }
// }

// export default connect(mapStateToProps)(AlloneArticle)
export default SingIn
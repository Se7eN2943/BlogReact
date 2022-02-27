import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const SingUp = () => {

    return (
        <div className="account-form shadow-box">
            <h5>  Create new account </h5>
            <form className='account-form_form' action="">
                <div className="account-form_input">
                    <label className="account-form_input__label" htmlFor="username">Username</label>
                    <input placeholder="Username" name='username' id='username' type="text" />
                </div>
                <div className="account-form_input">
                    <label className="account-form_input__label" htmlFor="email">Email address</label>
                    <input placeholder='Email address' name='email' id='email' type="email" />
                </div>
                <div className="account-form_input">
                    <label className="account-form_input__label" htmlFor="password">Password</label>
                    <input placeholder='Password' name='password' id='password' type="password" />
                </div>
                <div className="account-form_input">
                    <label className="account-form_input__label" htmlFor="repeatPassword">Repeat Password</label>
                    <input placeholder='Password' name='repeatPassword' id='repeatPassword' type="password" />
                </div>
                <div className="account-form_line"></div>
                <div className="account-form_checkbox">
                    <Checkbox><div className="account-form_checkbox_label" >I agree to the processing of my personal information</div></Checkbox>
                </div>
                <button className="account-form_submit" type="submit">Create</button>
                <div className="account-form_footer">
                    Already have an account?
                    <span> <Link to='`articles'>Sign In.</Link> </span>
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
export default SingUp
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const EditProfile = () => {

    return (
        <div className="form shadow-box">
            <h5>  Edit Profile </h5>
            <form className='form_form' action="">
                <div className="form_input">
                    <label className="form_input__label" htmlFor="username">Username</label>
                    <input placeholder="Username" name='username' id='username' type="text" />
                </div>
                <div className="form_input">
                    <label className="form_input__label" htmlFor="email">Email address</label>
                    <input placeholder='Email address' name='email' id='email' type="email" />
                </div>
                <div className="form_input">
                    <label className="form_input__label" htmlFor="password">New password</label>
                    <input placeholder='New password' name='password' id='password' type="password" />
                </div>
                <div className="form_input">
                    <label className="form_input__label" htmlFor="avatar">Avatar image</label>
                    <input placeholder='Avatar image' name='avatar' id='avatar' type="url" />
                </div>
                <button className="form_submit" type="submit">Save</button>
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
export default EditProfile
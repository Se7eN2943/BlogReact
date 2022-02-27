import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Tag = () => {

    return (
        <div className="article-form_tag article-form_input form_input">
            <input className="article-form_tag__input" placeholder='Tag' name='Tag' id='tag' type="text" />
            <button className="tag-delete color-button" type='button'>Delete</button>
            <button className="tag-add color-button" type='button'>Add tag</button>
        </div>
    )
}



const EditArticle = () => {

    return (
        <div className="form shadow-box article-form">
            <h5> Edit article </h5>
            <form className='form_form' action="">
                <div className="form_input article-form_input">
                    <label className="form_input__label" htmlFor="title">Title</label>
                    <input placeholder="Title" name='title' id='title' type="text" />
                </div>
                <div className="form_input article-form_input">
                    <label className="form_input__label" htmlFor="email">Short description</label>
                    <input placeholder='Title' name='shortDescription' id='shortDescription' type="text" />
                </div>
                <div className="form_input article-form_input">
                    <label className="form_input__label " htmlFor="text">Text</label>
                    <textarea placeholder='Text' name='text' id='text' type="text" />
                </div>
                <div className="article-form_tags">
                    <label className="form_input__label article-form_tags__label">Tags</label>
                    <Tag />
                    <Tag />
                </div>
                <button className="form_submit" type="submit">Send</button>
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
export default EditArticle
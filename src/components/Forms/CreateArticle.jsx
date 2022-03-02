import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Tag = () => {

    return (
        <label className="article-form_tag article-form_input form_input">
            <input className="article-form_tag__input" placeholder='Tag' name='Tag' id='tag' type="text" />
            <button className="tag-delete color-button" type='button'>Delete</button>
            <button className="tag-add color-button" type='button'>Add tag</button>
        </label>
    )
}

const CreateArticle = () => {

    return (
        <div className="form shadow-box article-form">
            <h5> Create new article </h5>
            <form className='form_form' action="">
                <div className="form_input article-form_input">
                    <label className="form_input__label" htmlFor="title">
                        Title
                        <input placeholder="Title" name='title' id='title' type="text" />
                    </label>
                </div>
                <div className="form_input article-form_input">
                    <label className="form_input__label" htmlFor="email">
                        Short description
                        <input placeholder='Title' name='shortDescription' id='shortDescription' type="text" />
                    </label>
                </div>
                <div className="form_input article-form_input">
                    <label className="form_input__label " htmlFor="text">
                        Text
                        <textarea placeholder='Text' name='text' id='text' type="text" />
                    </label>
                </div>
                <div className="article-form_tags">
                    <label className="form_input__label article-form_tags__label">
                        Tags
                        <Tag />
                        <Tag />
                    </label>
                </div>
                <button className="form_submit" type="submit">Create</button>
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
export default CreateArticle
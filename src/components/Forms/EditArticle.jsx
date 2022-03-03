import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TittleInput from './FormInputs/TittleInput'



const Tag = () => {

    return (
        <label className="article-form_tag article-form_input form_input">
            <input className="article-form_tag__input" placeholder='Tag' name='Tag' id='tag' type="text" />
            <button className="tag-delete color-button" type='button'>Delete</button>
            <button className="tag-add color-button" type='button'>Add tag</button>
        </label>
    )
}

const EditArticle = () => {
    

    return (
        <div className="form shadow-box article-form">
            <h5> Edit article </h5>
            <form className='form_form' action="">
                <TittleInput
                    required
                    placeholder='Title'
                    name='title'
                    label='Title'
                />
                <TittleInput
                    required
                    placeholder='Title'
                    name='shortDescription'
                    label='Short description'
                />
                <TittleInput
                    required
                    placeholder='Text'
                    name='textarea'
                    label='Text'
                />
                <div className="article-form_tags">
                    <label className="form_input__label article-form_tags__label">
                        Tags
                        <Tag />
                        <Tag />
                    </label>
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
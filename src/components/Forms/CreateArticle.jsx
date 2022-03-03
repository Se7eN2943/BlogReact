import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FormInput from './FormInput'
import blogAPI from '../../services'
import { setSignIn, setUserImg } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const createArticleAPI = new blogAPI()

const Tag = ({ value, onDeleteTag }) => {
    return (
        <label className="article-form_tag article-form_input form_input">
            <input readOnly style={{ cursor: 'default' }} value={value} className="article-form_tag__input" />
            <button onClick={() => onDeleteTag(value)} className="tag-delete color-button" type='button'>Delete</button>
        </label>
    )
}

const NewTag = ({ onAddTag, errorMessage, setErrorMessage }) => {
    const [tagValue, setTagValue] = useState('')
    const onAdd = () => {
        onAddTag(tagValue)
        setTagValue('')
    }
    return (
        <>
            <label className="article-form_tag article-form_input form_input">
                <input onFocus={() => setErrorMessage(false)} onInput={e => setTagValue(e.target.value)} value={tagValue} className="article-form_tag__input" placeholder='Tag' name='Tag' />
                <button onClick={() => setTagValue('')} className="tag-delete color-button" type='button'>Delete</button>
                <button onClick={onAdd} className="tag-add color-button" type='button'>Add tag</button>
            </label>
            {errorMessage ? <span style={{ color: 'red' }}>{errorMessage === 'repeat' ? 'This tag already exists' : 'The field cannot be empty'}</span> : null}
        </>
    )
}

const TagList = ({ tags, onDeleteTag }) => {
    const elements = tags.map(tag => <Tag onDeleteTag={onDeleteTag} value={tag} key={Math.floor(Math.random() * 1000)} />)
    return (
        <div className="article-form_tags">
            <label className="form_input__label article-form_tags__label">
                Tags
                {elements}
            </label>
        </div>
    )
}

const CreateArticle = ({token}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tags, setTags] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const onAddTag = tag => {
        if (tag.trim().length === 0) return setErrorMessage(true);
        if (tags.some(someTag => someTag === tag)) return setErrorMessage('repeat');
        const newTag = [tag]
        const newTags = tags.concat(newTag)
        setTags(newTags)
    }

    const onDeleteTag = tag => setTags(tags => tags.filter(filtertag => filtertag !== tag))

    const onSubmit = data => {
        const article = {
            article: {
                title: data.title,
                description: data.shortDescription,
                body: data.textarea,
                tagList: tags
            }
        }

        createArticleAPI.createArticle(token, article).then(article => console.log(article))

    };


    return (
        <div className="form shadow-box article-form">
            <h5> Create new article </h5>
            <form className='form_form' onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    errors={errors}
                    placeholder='Title'
                    label='Title'
                    inputClass='article-form_input'
                    {...register("title", {
                        required: true
                    })}
                />
                <FormInput
                    errors={errors}
                    placeholder='Title'
                    label='Short description'
                    inputClass='article-form_input'
                    {...register("shortDescription", {
                        required: true
                    })}
                />
                <FormInput
                    errors={errors}
                    placeholder='Text'
                    label='Text'
                    inputClass='article-form_input'
                    {...register("textarea", {
                        required: true
                    })}
                />

                <TagList onDeleteTag={onDeleteTag} tags={tags} />
                <NewTag setErrorMessage={setErrorMessage} onAddTag={onAddTag} errorMessage={errorMessage} />
                <button className="form_submit" type="submit">Create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(CreateArticle)
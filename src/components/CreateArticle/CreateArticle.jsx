import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import FormInput from '../Forms/FormInput';
import BlogAPI from '../../services/services';

const createArticleAPI = new BlogAPI();

function Tag({ value, onDeleteTag }) {
  return (
    <label className="article-form_tag article-form_input form_input">
      <input readOnly style={{ cursor: 'default' }} value={value} className="article-form_tag__input" />
      <button onClick={() => onDeleteTag(value)} className="tag-delete color-button" type="button">
        Delete
      </button>
    </label>
  );
}

function NewTag({ onAddTag, errorMessage, setErrorMessage }) {
  const [tagValue, setTagValue] = useState('');

  const onAdd = () => {
    onAddTag(tagValue);
    setTagValue('');
  };
  return (
    <>
      <label className="article-form_tag article-form_input form_input">
        <input
          onFocus={() => setErrorMessage(false)}
          onInput={(e) => setTagValue(e.target.value)}
          value={tagValue}
          className="article-form_tag__input"
          placeholder="Tag"
          name="Tag"
        />
        <button onClick={() => setTagValue('')} className="tag-delete color-button" type="button">
          Delete
        </button>
        <button onClick={onAdd} className="tag-add color-button" type="button">
          Add tag
        </button>
      </label>
      {errorMessage ? (
        <span style={{ color: 'red' }}>
          {errorMessage === 'repeat' ? 'This tag already exists' : 'The field cannot be empty'}
        </span>
      ) : null}
    </>
  );
}

function TagList({ tags, onDeleteTag }) {
  const elements = tags.map((tag) => (
    <Tag onDeleteTag={onDeleteTag} value={tag} key={Math.floor(Math.random() * 1000)} />
  ));
  return (
    <div className="article-form_tags">
      <label className="form_input__label article-form_tags__label">
        Tags
        {elements}
      </label>
    </div>
  );
}

function CreateArticle({ token, article, editing, getOneArticle }) {
  const { title, description, body, tagList, slug } = article;
  const defaultTagList = editing ? tagList : [];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tags, setTags] = useState(defaultTagList);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editBody, setEditBody] = useState(body);

  const onAddTag = (tag) => {
    if (tag.trim().length === 0) return setErrorMessage(true);
    if (tags.some((someTag) => someTag === tag)) return setErrorMessage('repeat');
    const newTag = [tag];
    const newTags = tags.concat(newTag);
    setTags(newTags);
  };

  const onDeleteTag = (tag) => setTags((tags) => tags.filter((filtertag) => filtertag !== tag));

  const onSubmit = (data) => {
    const article = {
      article: {
        title: data.title,
        description: data.shortDescription,
        body: data.textarea,
        tagList: tags,
      },
    };
    if (editing) {
      createArticleAPI.editArticle(token, article, slug).then(() => navigate(-1));
    } else {
      createArticleAPI.createArticle(token, article).then((article) => {
        getOneArticle(article.article.slug, token);
        navigate(`/articles/${article.article.slug}`);
      });
    }
  };

  return (
    <div className="form shadow-box article-form">
      <h5> {editing ? 'Edit article' : 'Create new article'} </h5>
      <form className="form_form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          onInput={editing && ((e) => setEditTitle(e.target.value))}
          value={editing && editTitle}
          errors={errors}
          placeholder="Title"
          label="Title"
          inputClass="article-form_input"
          {...register('title', {
            required: true,
          })}
        />
        <FormInput
          onInput={editing && ((e) => setEditDescription(e.target.value))}
          value={editing && editDescription}
          errors={errors}
          placeholder="Title"
          label="Short description"
          inputClass="article-form_input"
          {...register('shortDescription', {
            required: true,
          })}
        />
        <FormInput
          onInput={editing && ((e) => setEditBody(e.target.value))}
          value={editing && editBody}
          errors={errors}
          placeholder="Text"
          label="Text"
          inputClass="article-form_input"
          {...register('textarea', {
            required: true,
          })}
        />
        <TagList onDeleteTag={onDeleteTag} tags={tags} />
        <NewTag setErrorMessage={setErrorMessage} onAddTag={onAddTag} errorMessage={errorMessage} />
        <button className="form_submit" type="submit">
          {editing ? 'Send' : 'Create'}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    article: state.article,
  };
};

export default connect(mapStateToProps)(CreateArticle);

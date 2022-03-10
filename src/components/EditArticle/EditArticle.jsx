import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateArticle from '../CreateArticle/CreateArticle';
import { setArticle } from '../../redux/actions';
import BlogAPI from '../../services/services';

const blog = new BlogAPI();

function EditArticle({ token, setArticle, username, article, getOneArticle }) {
  const { slug } = useParams()

  console.log('до', article)
  useEffect(() => {
    console.log('середина')
    blog.getArticle(slug, token).then((article) => {
      setArticle(article);
      localStorage.setItem('article', JSON.stringify(article));
    });
  }, []);
  console.log('после', article)

  return username === article?.author?.username ? <CreateArticle editing /> : <Navigate to='/articles' />
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    username: state.username,
    article: state.article
  };
};

export default connect(mapStateToProps, { setArticle })(EditArticle);



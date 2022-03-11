import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateArticle from '../CreateArticle/CreateArticle';
import { setArticle } from '../../redux/actions';
import BlogAPI from '../../services/services';

const blog = new BlogAPI();

function EditArticle({ token, setArticle, username, article }) {
  const { slug } = useParams()

  useEffect(() => {
    blog.getArticle(slug, token).then((article) => {
      setArticle(article);
      localStorage.setItem('article', JSON.stringify(article));
    });
  }, []);

  return username === article.author.username ? <CreateArticle editing /> : null
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    username: state.username,
    article: state.article
  };
};

export default connect(mapStateToProps, { setArticle })(EditArticle);



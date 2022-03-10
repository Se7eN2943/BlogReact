import React, { useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { Popover, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import BlogAPI from '../../services/services';

const blog = new BlogAPI();

function ArticleUser(props) {
  const { author, createdAt, username, slug, alone, token, getAllArticles } = props;
  const navigate = useNavigate();
  const data = createdAt !== undefined && createdAt.split('T')[0];
  const [vilibale, setVisibale] = useState(false);

  const delArticle = async () => {
    await blog.delArticle(token, slug);
    getAllArticles();
    navigate('/articles', { replace: true });
    setVisibale(false);
  };

  const content = (
    <div className="modal">
      <div className="modal_title">
        <InfoCircleFilled className="modal_title__icon" style={{ color: '#FAAD14' }} />
        <p>Are you sure to delete this article?</p>
      </div>
      <div className="modal_buttons">
        <Button onClick={() => setVisibale(false)} className="modal_buttons__button no">
          No
        </Button>
        <Button onClick={delArticle} className="modal_buttons__button" type="primary">
          Yes
        </Button>
      </div>
    </div>
  );

  return (
    <div className="article_user-wrapper">
      <div className="article_user">
        <div className="article_user__title">
          <h6 className="article_user__title--h6 user_header">{author?.username}</h6>
          <span className="article_user__title--date user_date">{format(new Date(data), 'PP') || null}</span>
        </div>
        <div className="article_user__img">
          <img src={author?.image} alt="user" />
        </div>
      </div>
      {author?.username === username && alone && (
        <div className="article_user_buttons">
          <Popover placement="rightTop" content={content} visible={vilibale}>
            <Button onClick={() => setVisibale(true)} className="article_user_buttons__delete color-button">
              Delete
            </Button>
          </Popover>
          <Link to={`/articles/${slug}/edit`}>
            <button className="article_user_buttons__edit color-button" type="button">
              Edit
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    token: state.token,
  };
};

export default connect(mapStateToProps)(ArticleUser);

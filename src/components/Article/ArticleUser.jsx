import React from 'react';

const ArticleUser = props => {
    const { author, body, createdAt } = props
    return (
        <div className="article_user">
            <div className="article_user__title">
                <h6 className="article_user__title--h6 user_header">
                    {author?.username}
                </h6>
                <span className="article_user__title--date user_date">
                    {createdAt}
                </span>
            </div>
            <div className="article_user__img">
                <img src={author?.image} alt="user_photo" />
            </div>
        </div>
    )
}

export default ArticleUser

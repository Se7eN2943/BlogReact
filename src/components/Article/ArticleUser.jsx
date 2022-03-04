import React from 'react';
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import blogAPI from '../../services'
import defaultPhoto from './default_photo.png'

const blog = new blogAPI()

const ArticleUser = props => {
    const { author, createdAt, username, slug, alone, token, getAllArticles } = props
    const navigate = useNavigate()
    const data = createdAt !== undefined && createdAt.split('T')[0]
    const delArticle = async () => {
        await blog.delArticle(token, slug)
        getAllArticles()
        navigate('/articles', { replace: true })
    }

    return (
        <>
            <div className="article_user-wrapper">
                <div className="article_user">
                    <div className="article_user__title">
                        <h6 className="article_user__title--h6 user_header">
                            {author?.username}
                        </h6>
                        <span className="article_user__title--date user_date">
                            {format(new Date(data), 'PP') || null}
                        </span>
                    </div>
                    <div className="article_user__img">
                        <img src={author?.image || defaultPhoto} alt="user" />
                    </div>
                </div>
                {(author?.username === username && alone) &&
                    <div className="article_user_buttons">
                        <button onClick={delArticle} className="article_user_buttons__delete color-button" type='button'>Delete</button>
                        <Link to={`/articles/${slug}/edit`}>
                            <button className="article_user_buttons__edit color-button" type='button'>Edit</button>
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        token: state.token

    }
}

export default connect(mapStateToProps)(ArticleUser)

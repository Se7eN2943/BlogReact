import React from 'react';
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import blogAPI from '../../services'

const blog = new blogAPI()

const ArticleUser = props => {
    const { author, body, createdAt, username, slug, alone, token } = props

    const delArticle = () => {

        blog.delArticle(token, slug).then(then => console.log(then))
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
                            {createdAt}
                        </span>
                    </div>
                    <div className="article_user__img">
                        <img src={author?.image} alt="user_photo" />
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

import React from 'react';
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { Popover, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import blogAPI from '../../services'

const blog = new blogAPI()

const ArticleUser = props => {
    const { author, createdAt, username, slug, alone, token, getAllArticles } = props
    const navigate = useNavigate()
    const data = createdAt !== undefined && createdAt.split('T')[0]

    const text = <span>Title</span>;
    const content = (
        <div>
            <p>Are you sure to delete this article?</p>
            <a>No</a>
            <a>Yes</a>
        </div>
    );



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
                        <img src={author?.image} alt="user" />
                    </div>
                </div>
                {(author?.username === username && alone) &&
                    <div className="article_user_buttons">
                        <Popover
                            placement="rightTop"
                            title={text}
                            content={content}
                            // visible={true}
                            trigger="click"
                        >
                            <Button>RT</Button>
                        </Popover>
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

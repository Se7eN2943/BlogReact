import React from 'react';
import ArticleTittle from './ArticleTittle'
import ArticleUser from './ArticleUser'

const Article = props => {
    return (
        <div className="article">
            <ArticleTittle
                description={props.description}
                favorited={props.favorited}
                favoritesCount={props.favoritesCount}
                slug={props.slug}
                tagList={props.tagList}
                title={props.title}
                updatedAt={props.updatedAt}
                getArticle={props.getArticle}
            />
            <ArticleUser
                author={props.author}
                createdAt={props.createdAt}
            />
        </div>
    )
}

export default Article


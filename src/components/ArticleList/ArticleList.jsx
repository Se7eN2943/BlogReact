import React from 'react';
import { connect } from 'react-redux'
import AlloneArticle from '../AlloneArticle/AlloneArticle';
import Article from '../Article/Article';

const ArticleList = ({ articles, getArticle }) => {

    const elements = articles.map(article => {
        return <Article
            key={article.slug}
            body={article.body}
            description={article.description}
            favorited={article.favorited}
            favoritesCount={article.favoritesCount}
            slug={article.slug}
            tagList={article.tagList}
            title={article.title}
            updatedAt={article.updatedAt}
            getArticle={getArticle}
            author={article.author}
            createdAt={article.createdAt}
        />
    })


    return (
        <main>
            <div className="article-list">
                {elements}
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList)




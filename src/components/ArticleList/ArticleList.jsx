import React from 'react';
import { connect } from 'react-redux'
import AlloneArticle from '../AlloneArticle/AlloneArticle';
import Article from '../Article/Article';

const ArticleList = ({ articles }) => {

    const elements = articles.map(article => {
        return <Article
            key={article.slug}
            author={article.author}
            body={article.body}
            createdAt={article.createdAt}
            description={article.description}
            favorited={article.favorited}
            favoritesCount={article.favoritesCount}
            slug={article.slug}
            tagList={article.tagList}
            title={article.title}
            updatedAt={article.updatedAt}
        />
    })

    return (
        <main>
            <div className="article-list">
                {/* <AlloneArticle /> */}
                {elements}

            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
}

export default connect(mapStateToProps)(ArticleList)




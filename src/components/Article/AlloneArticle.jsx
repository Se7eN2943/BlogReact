import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ArticleTittle from './ArticleTittle';
import ArticleUser from './ArticleUser';

const AlloneArticle = ({ article, getArticle, token, getAllArticles }) => {
    const { slug } = useParams()
    useEffect(() => {
        getArticle(slug, token)
    }, [])
    return (
        <main>
            <div className="article shadow-box article-alone">
                <div className="article-alone_header">
                    <ArticleTittle
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
                    <ArticleUser
                        favorited={article.favorited}
                        favoritesCount={article.favoritesCount}
                        alone={true}
                        slug={article.slug}
                        author={article.author}
                        createdAt={article.createdAt}
                        getArticle={getArticle}
                        getAllArticles={getAllArticles}
                    />
                </div>
                <div className="article-alone_body">
                    
                    <ReactMarkdown children={article.body} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
        </main>


    )
}

const mapStateToProps = (state) => {
    return {
        article: state.article,
        token: state.token
    }
}

export default connect(mapStateToProps)(AlloneArticle)
import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ArticleTittle from '../Article/ArticleTittle';
import ArticleUser from '../Article/ArticleUser';

function AlloneArticle({ article, getAllArticles }) {
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
            alone
          />
          <ArticleUser
            favorited={article.favorited}
            favoritesCount={article.favoritesCount}
            alone
            slug={article.slug}
            author={article.author}
            createdAt={article.createdAt}
            getAllArticles={getAllArticles}
          />
        </div>
        <div className="article-alone_body">
          <ReactMarkdown children={article.body} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
    token: state.token,
  };
};

export default connect(mapStateToProps)(AlloneArticle);

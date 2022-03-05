import React from 'react';
import ArticleTittle from './ArticleTittle';
import ArticleUser from './ArticleUser';

function Article(props) {
  return (
    <div className="article shadow-box">
      <ArticleTittle
        description={props.description}
        favorited={props.favorited}
        favoritesCount={props.favoritesCount}
        slug={props.slug}
        tagList={props.tagList}
        title={props.title}
        updatedAt={props.updatedAt}
        getOneArticle={props.getOneArticle}
      />
      <ArticleUser author={props.author} createdAt={props.createdAt} />
    </div>
  );
}

export default Article;

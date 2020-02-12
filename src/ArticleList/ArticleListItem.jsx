import React from 'react';
import SlugBotton from './SlugButton';
import './ArticleListItem.module.css';

const ArticleListItem = (props) => {
    return (
        <div>
            <head>
                <title>{props.article.title}</title>
            </head>
            <body>
                <h1>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <time dateTime = {props.article.pubYear}>
                    {props.article.pubDate}
                </time>
                <SlugBotton slug = {props.article.slug} buttonText = {props.article.author}>
                </SlugBotton>
            </body>
        </div>
    );
};  

export default ArticleListItem;
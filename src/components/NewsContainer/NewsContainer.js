import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

function NewsContainer(props) {
  const localNews = props.localNews.map(article => <NewsArticle key={article.id} image={article.img} headline={article.headline} description={article.description} url={article.url}/>)

  return (
    <div className='news-container'>
      {localNews}
    </div>
  )
}

export default NewsContainer;

import React from 'react';
import './NewsArticle.css';
// Each NewsArticle card will display: the image, the headline, the description, and the url (see the screenshot above for an idea).

function NewsArticle({ image, headline, description, url }) {
  return (
    <div className='article-card'>
      <img className="card-image" src={image} alt={headline} />
      <div>
        <h3>{headline}</h3>
        <p className="card-description">{description}</p>
        <a href={url}>Check it out</a>
      </div>
    </div>
  )
}

export default NewsArticle;

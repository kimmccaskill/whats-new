import React from 'react';
import './NewsArticle.css';
// Each NewsArticle card will display: the image, the headline, the description, and the url (see the screenshot above for an idea).

function NewsArticle(props) {
  return (
    <div className='article-card'>
      <img className="card-image" src={props.image} alt={props.headline} />
      <div>
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default NewsArticle;

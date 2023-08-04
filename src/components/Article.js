
import React from 'react';

const Article = ({ title, date, preview }) => {
  return (
    <article data-testid="article-element">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
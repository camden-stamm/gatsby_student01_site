import React from "react"

const Article = ({ pageContext }) => {
  const { article } = pageContext;
  return (
    <div>
      <div>
        <h1>{article.title}</h1>
        <img src={article.mediaImage.mediaImage.url} alt='article'/>
        <p>Created: {article.created}</p>
      </div>
    </div>
  );
}

export default Article;
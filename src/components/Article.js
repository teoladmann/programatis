import React from 'react';
import { Link } from 'gatsby';

const Article = ({ edge }) => {
  return (
    <Link to={`/clase/${edge.node.fields.slug}`}>
      <article className="article">
        {edge.node.frontmatter.title}
      </article>
    </Link>
  )
}

export default Article;
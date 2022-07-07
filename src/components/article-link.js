import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NeonText from "./neon-text"
import { sm, md } from "./breakpoints"

const ArticleItem = styled.article`
  a {
    text-decoration: none;
  }

  hr {
    background: rgba(255, 255, 255, 0.1);
  }
`

const ArticleTitle = styled.h2`
  margin-bottom: 0em;
  margin-top: 16px;
  font-size: 1.4em;
  ${sm`
      font-size: 1.3em;
    `}
  ${md`
    font-size: 1.7em;
  `}
`

const ArticleHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin: 4px 0 0 0;

  span {
    margin-right: 8px;
    margin-left: 0%;
    color: var(--text-secondary);
    transition: color 0.5s ease-in-out;
    font-size: 0.9em;
  }
`

const Tag = styled.div`
  background-color: var(--primary-light-fade-55);
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
  color: var(--text-secondary);
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  font-size: 0.7em;
  ${sm`
    font-size: 0.8em;
  `};
  ${md`
    font-size: 1em;
  `}
`

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;;
  gap: 1em;
  margin: 0.75rem 0;
  max-width: 100%;
`

const ArticleLink = ({ post }) => {
  const tags = (post.frontmatter.tags || "")
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter((t) => !!t)

  return (
    <ArticleItem>
      <Link to={post.frontmatter.path}>
        <ArticleTitle>
          <NeonText text={post.frontmatter.title}></NeonText>
        </ArticleTitle>
        {tags.length > 0 && (
          <TagWrapper>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagWrapper>
        )}
        <ArticleHeader>
          <span className="date">{post.frontmatter.date}</span>
          <span className="divider">•</span>
          <span className="read-time">{post.timeToRead} min read</span>
        </ArticleHeader>
      </Link>
    </ArticleItem>
  )
}
export default ArticleLink

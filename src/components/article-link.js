import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const ArticleItem = styled.article`
  a {
    text-decoration: none;
  }

  hr {
    background: rgba(255, 255, 255, 0.1);
  }
`

const ArticleTitle = styled.h2`
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 1.4em;
  ${breakpoint("sm")`
      font-size: 1.5em;
    `}
  ${breakpoint("md")`
      font-size: 2em;
    `}
  font-weight: bold;
  color: ${props => props.theme.accent} !important;
  &:hover {
    color: ${props => props.theme.accentDark} !important;
  }
`

const ArticleHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0 8px 0;

  span {
    margin-right: 8px;
    margin-left: 0%;
    color: ${props => props.theme.textSecondary};
    font-size: 13px;
  }
`

const ArticleBody = styled.section`
  padding: 0 0 20px 0;
  p {
    text-align: justify;
    font-size: 18px;
  }
  .read-more {
    text-decoration: underline;
  }
`

const ArticleLink = ({ post }) => {
  return (
    <ArticleItem>
      <Link to={post.frontmatter.path}>
        <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
      </Link>
      <ArticleHeader>
        <span className="date">{post.frontmatter.date}</span>
        <span className="divider">•</span>
        <span className="read-time">{post.timeToRead} min read</span>
      </ArticleHeader>
      <ArticleBody>
        <p>{post.frontmatter.description}</p>
      </ArticleBody>
    </ArticleItem>
  )
}
export default ArticleLink

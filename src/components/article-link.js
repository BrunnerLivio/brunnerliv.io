import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import Badge from "./language-badge"

const ArticleItem = styled.article`
  h2 {
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 1.4em;
    ${breakpoint("sm")`
      font-size: 1.5em;
    `}
    ${breakpoint("md")`
      font-size: 2em;
    `}
  }
  hr {
    background: rgba(255, 255, 255, 0.1);
  }
`
const ArticleHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  span {
    margin-right: 8px;
    margin-left: 0%;
    color: ${props => props.theme.textSecondary};
    &.date {
      margin-left: 16px;
    }
    &.divider,
    &.read-time {
      display: none;
      ${breakpoint("sm")`
        display: inline;
      `}
    }
    &.date {
      display: none;
      ${breakpoint("xsm")`
        display: inline;
      `}
    }
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
  const tags = post.frontmatter.tags
    .split(",")
    .map(tag => tag.trim())
    .map(tag => <Badge language={tag}></Badge>)
  return (
    <ArticleItem>
      <Link to={post.frontmatter.path}>
        <h2>{post.frontmatter.title}</h2>
      </Link>
      <ArticleHeader>
        {tags}
        <span className="date">{post.frontmatter.date}</span>
        <span className="divider">-</span>
        <span className="read-time">{post.timeToRead} min read</span>
      </ArticleHeader>
      <ArticleBody>
        <p>{post.frontmatter.description}</p>
      </ArticleBody>
    </ArticleItem>
  )
}
export default ArticleLink

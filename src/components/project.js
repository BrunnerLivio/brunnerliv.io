import React from "react"

import styled from "styled-components"
import color from "color"
import LanguageBadge from "./language-badge"

const ProjectSection = styled.section`
  border-radius: 8px;
  color: ${props => props.theme.text};
  flex: 0 50%;
  width: 100%;
  padding-right: 30px;
  margin-bottom: 8px;
  h2,
  p {
    color: ${props => props.theme.text};
  }
  p {
    font-size: 1rem;
    color: ${props =>
      color(props.theme.text)
        .alpha(0.7)
        .toString()};
    margin-top: 4px;
  }
`

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  h2 {
    margin-bottom: 0.2rem;
    display: inline-block;
    padding-bottom: 2px;
    font-size: 1.4rem;
    margin-right: 8px;
    a {
      text-decoration: none;
      &:hover {
        color: ${props =>
          color(props.theme.text)
            .alpha(0.6)
            .toString()};
      }
      &:after {
        display: block;
        content: "";
        margin-top: 2px;
      }
    }
  }
`

const Project = ({ project }) => (
  <ProjectSection>
    <TitleWrapper>
      <h2>
        <a href={project.sourceCode}>{project.name}</a>
      </h2>
      {project.languages.map(language => <LanguageBadge language={language}></LanguageBadge>)}
    </TitleWrapper>
    <p>{project.description}</p>
  </ProjectSection>
)

export default Project

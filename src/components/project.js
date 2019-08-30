import React from "react"

import styled from "styled-components"
import LanguageBadge from "./language-badge"

const ProjectSection = styled.section`
  border-radius: 8px;
  color: ${props => props.theme.text};
  flex: 0 50%;
  width: 100%;
  padding-right: 30px;
  margin-bottom: 8px;
  h2,
  p,
  a {
    color: ${props => props.theme.text};
  }
  p {
    font-size: 1rem;
    color: ${props => props.theme.textSecondary};
    margin-top: 4px;
  }
`

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  h2 {
    display: inline-block;
    padding-bottom: 2px;
    font-size: 1.4rem;
    margin-right: 8px;
    margin-bottom: 0;
  }
`

const Project = ({ project }) => (
  <ProjectSection>
    <TitleWrapper>
      <h2>
        <a href={project.sourceCode}>{project.name}</a>
      </h2>
      {project.languages.map(language => (
        <LanguageBadge language={language}></LanguageBadge>
      ))}
    </TitleWrapper>
    <p>{project.description}</p>
  </ProjectSection>
)

export default Project

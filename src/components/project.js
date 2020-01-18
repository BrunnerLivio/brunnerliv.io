import React from "react"

import styled from "styled-components"
import LanguageBadge from "./language-badge"
import breakpoint from "styled-components-breakpoint"

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
    text-decoration: none;
  }
  p {
    font-size: 1rem;
    color: ${props => props.theme.textSecondary};
    margin-top: 4px;
  }
`

const TitleWrapper = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 0.2rem;
  h2 {
    margin-bottom: 4px;

    font-weight: bold;
    font-size: 1.4em;
    ${breakpoint("sm")`
      font-size: 1.5em;
    `}
    ${breakpoint("md")`
      font-size: 2em;
    `}
  }
  a {
    color: ${props => props.theme.accent};
    &:hover {
      color: ${props => props.theme.accentDark};
    }
  }
`

const Project = ({ project }) => (
  <ProjectSection>
    <TitleWrapper>
      <h2>
        <a href={project.sourceCode}>{project.name}</a>
      </h2>
    </TitleWrapper>
    <p>{project.description}</p>
  </ProjectSection>
)

export default Project

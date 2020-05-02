import React from "react"
import { graphql } from "gatsby"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import SEO from "../components/seo"
import Project from "../components/project"
import Content from "../components/content"
import TotalDownloads from "../components/npm/total-downloads"

const ProjectList = styled.main`
  padding: 20px;
  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme.accent} !important;
    font-weight: bold;
    font-size: 1.4em;
    ${breakpoint("sm")`
      font-size: 1.5em;
    `}
    ${breakpoint("md")`
      font-size: 2em;
    `}
  }
`

const Projects = ({ data }) => {
  const projects = data.site.siteMetadata.projects

  return (
    <ProjectList>
      <SEO title="Projects" />
      <TotalDownloads></TotalDownloads>
      <Content>
        {(projects || []).map((project, index) => (
          <Project key={index} project={project}></Project>
        ))}
      </Content>
    </ProjectList>
  )
}

export default Projects
export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        projects {
          sourceCode
          name
          description
          languages
        }
      }
    }
  }
`

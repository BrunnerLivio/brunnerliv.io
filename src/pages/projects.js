import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { sm, md } from "../components/breakpoints"
import Seo from "../components/seo"
import Project from "../components/project"
import Content from "../components/content"
import TotalDownloads from "../components/npm/total-downloads"

const ProjectList = styled.main`
  padding: 20px;
  overflow:hidden;
  h1 {
    margin-bottom: 2rem;
    color: var(--accent) !important;
    font-weight: bold;
    font-size: 1.4em;
    ${sm`
      font-size: 1.5em;
    `}
    ${md`
      font-size: 2em;
    `}
  }
`

const Projects = ({ data }) => {
  const projects = data.site.siteMetadata.projects

  return (
    <ProjectList>
      <Seo title="Projects" />
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

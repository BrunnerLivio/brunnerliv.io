import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Project from "../components/project"
import styled from "styled-components"
import Content from "../components/content"

const ProjectList = styled.main`
  margin-top: 28px;
  padding: 20px;
  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme.text};
  }
`

const Projects = ({ data }) => {
  const projects = data.site.siteMetadata.projects

  return (
    <ProjectList>
      <SEO title="Projects" />
      <h2 id="latest-repos">Latest Repos</h2>
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
        contributions {
          sourceCode
          name
          description
          languages
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Project from "../components/project"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const ProjectWrapper = styled.section`
  margin-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  ${breakpoint("md")`
    flex-direction: row;
    width: 700px;
  `}
`

const ProjectList = styled.section`
  margin-top: 28px;
  padding: 20px;
  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme.text};
  }
`

const Projects = ({ data }) => {
  const projects = data.site.siteMetadata.projects
  const contributions = data.site.siteMetadata.contributions

  return (
    <ProjectList>
      <SEO title="Projects" />
      <h1 id="latest-repos">Latest Repos</h1>
      <ProjectWrapper>
        {(projects || []).map(project => (
          <Project project={project}></Project>
        ))}
      </ProjectWrapper>
      <h1 id="latest-contributions">Latest Contributions</h1>
      <ProjectWrapper>
        {(contributions || []).map(project => (
          <Project project={project}></Project>
        ))}
      </ProjectWrapper>
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

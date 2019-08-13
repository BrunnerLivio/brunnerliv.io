/**
 * Layout component that queries for data
 * with Gatsby"s useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme/theme";

import Header from "./header"
import "./layout.css"

const MainWrapper = styled.main`
  color: rgba(255, 255, 255, 0.8);
  `;

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.primaryDarker};
  &&:before {
    max-height: 500px;
    height: 100%;
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(180deg,${props => props.theme.primary} 0%, ${props => props.theme.primaryDarker} 100%);
  }
`;

const Content = styled.div`
  width: 800px;
  position: relative;
  padding-top: 30px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Content>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Content>
        </Container>
      </MainWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

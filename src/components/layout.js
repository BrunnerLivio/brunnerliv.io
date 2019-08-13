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
import Navigation from "./navigation";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.primaryDarker};
  flex: 1;
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
  position: relative;
  display: flex;
  flex-direction: column;
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
            <Navigation />
            {children}
            <footer>
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

/**
 * Layout component that queries for data
 * with Gatsby"s useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import theme from "../theme/theme"
import color from "color";

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"
import { Location } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.primaryDarker};
  flex: 1;
  &:before {
    max-height: 500px;
    min-height: 60vh;
    width: 100%;
    content: "";
    display: block;
    position: absolute;
    background: linear-gradient(
      180deg,
      ${props => props.theme.primary} 0%,
      ${props => props.theme.primaryDarker} 100%
    );
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  color: ${props => color(props.theme.text).alpha(0.5).toString()};
  a {
    color: ${props => color(props.theme.text).alpha(0.5).toString()};
  }
  text-align: center;
  margin-bottom: 40px;
  font-size: 0.8em;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      site {
        siteMetadata {
          navigation {
            name
            to
          }
        }
      }
    }
  `);
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Header />
        <Container>
          <Content>
            <Location>
              {({ location }) => {
                return <Navigation navigation={data.site.siteMetadata.navigation} active={location.pathname} />
              }}
            </Location>
            {children}
            <Footer>Design by Livio - Mountain by <a href="https://www.instagram.com/tanjabailiff/">Tanja</a> - Built with <a href="https://www.gatsbyjs.org">GatsbyJS</a> </Footer>
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

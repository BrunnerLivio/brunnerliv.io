/**
 * Layout component that queries for data
 * with Gatsby"s useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled, { withTheme, createGlobalStyle } from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"
import { Location } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import Transition from "./transition"
import Toggle from "./toggle"
import sun from "../images/sun.png"
import moon from "../images/moon.png"
import Footer from "./footer"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.text};
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.linkHover};
    }
  }
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

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.primaryDarker};
  }
`
const Layout = withTheme(({ children }) => {
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
  `)
  const themeContext = useContext(ThemeManagerContext)

  return (
    <MainWrapper>
      <GlobalStyle />
      <Header>
        <Toggle
          icons={{
            checked: (
              <img
                src={moon}
                width="16"
                height="16"
                alt="Moon"
                style={{ pointerEvents: "none" }}
              />
            ),
            unchecked: (
              <img
                src={sun}
                width="16"
                height="16"
                alt="Sun"
                style={{ pointerEvents: "none" }}
              />
            ),
          }}
          checked={themeContext.isDark}
          onChange={e => themeContext.toggleDark()}
        />
      </Header>
      <Container>
        <Content>
          <Location>
            {({ location }) => {
              return (
                <Navigation
                  navigation={data.site.siteMetadata.navigation}
                  active={location.pathname}
                />
              )
            }}
          </Location>
          <Location>
            {({ location }) => {
              return <Transition location={location}>{children}</Transition>
            }}
          </Location>
          <Footer />
        </Content>
      </Container>
    </MainWrapper>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

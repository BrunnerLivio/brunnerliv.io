import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import React, { useContext, useEffect, useState } from "react"
import styled, { withTheme } from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import Header from "./header"
import Navigation from "./navigation"
import Transition from "./transition"
import Toggle from "./toggle"
import Footer from "./footer"
import GlobalStyle from "./globalStyle"

import moon from "../images/moon.png"
import sun from "../images/sun.png"

import "./layout.css"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out opacity;
  opacity: 0;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.primaryDarker};
  flex: 1;
  height: 100%;
  position: relative;
  z-index: 1;
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

  const [isMounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <MainWrapper style={{ opacity: isMounted ? 1 : 0 }}>
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
          onChange={() => themeContext.toggleDark()}
        />
      </Header>
      <Container>
        <Content>
          <Location>
            {({ location }) => (
              <>
                <Navigation
                  navigation={data.site.siteMetadata.navigation}
                  active={location.pathname}
                />
                <Transition location={location}>{children}</Transition>
              </>
            )}
          </Location>
          <Footer />
        </Content>
      </Container>
    </MainWrapper>
  )
})

export default Layout

import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import React, { useEffect, useState } from "react"
import styled, { ThemeProvider, withTheme } from "styled-components"

import Header from "./header"
import Navigation from "./navigation"
import Transition from "./transition"

import Footer from "./footer"
import GlobalStyle from "./globalStyle"

import "./layout.css"
import OutrunGrid from "./outrun-grid"
import DarkModeToggle from "./dark-mode-toggle"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out opacity;
  opacity: 0;
  position: relative;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: var(--primary-darker);
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
      var(--primary) 0%,
      var(--primary-darker) 100%
    );
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ThemeContext = React.createContext(typeof window !== 'undefined' ? window.__theme === "dark": false)

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

  const [isMounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [darkMode, setDarkMode] = useState(typeof window !== 'undefined' ? window.__theme === "dark": false)

  return (
    <ThemeProvider
      theme={{
        breakpoints: {
          xs: 0,
          xsm: 400,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
        },
      }}
    >
      <ThemeContext.Provider value={darkMode}>
        <MainWrapper style={{ opacity: isMounted ? 1 : 0 }}>
          <GlobalStyle />
          <Header>
            {typeof window === "undefined" ? (
              <></>
            ) : (
              <DarkModeToggle onChange={setDarkMode} />
            )}
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
          <OutrunGrid />
        </MainWrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
})

export default Layout

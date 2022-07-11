import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import React, { useState } from "react"
import styled from "styled-components"

import useIsClient from "./hooks/useIsClient"

import Header from "./header"
import Navigation from "./navigation"
import Transition from "./transition"

import Footer from "./footer"
import GlobalStyle from "./globalStyle"

import "./layout.css"
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
  background: var(--primary);
  transition: background 0.5s ease-in-out;
  flex: 1;
  height: 100%;
  position: relative;
  z-index: 1;
  /* &:before {
    max-height: 500px;
    min-height: 60vh;
    width: 100%;
    content: "";
    display: block;
    position: absolute;
    transition: background 0.5s ease-in-out;
    background: linear-gradient(
      180deg,
      var(--primary) 0%,
      var(--primary-darker) 100%
    );
  } */
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ThemeContext = React.createContext(
  typeof window !== "undefined" ? window.__theme === "dark" : false
)

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
  `)

  const { isClient } = useIsClient()

  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" ? window.__theme === "dark" : false
  )

  return (
    <ThemeContext.Provider value={darkMode}>
      <MainWrapper style={{ opacity: isClient ? 1 : 0 }}>
        <GlobalStyle />
        <Header darkMode={darkMode}>
          {isClient ? (
            <DarkModeToggle checked={darkMode} onChange={setDarkMode} />
          ) : (
            <></>
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
        {/* <OutrunGrid /> */}
      </MainWrapper>
    </ThemeContext.Provider>
  )
}

export default Layout

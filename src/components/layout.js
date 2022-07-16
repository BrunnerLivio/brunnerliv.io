import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import React from "react"
import styled from "styled-components"

import useIsClient from "./hooks/useIsClient"

import Header from "./header"
import Navigation from "./navigation"
import Transition from "./transition"

import Footer from "./footer"
import GlobalStyle from "./globalStyle"

import "./layout.css"

import { WeatherProvider } from "./header/weather/weatherProvider"

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
  // const [state, dispatch] = useWeather()

  // function activateLocation() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const coords = {
  //       lat: position.coords.latitude,
  //       lon: position.coords.longitude,
  //     }
  //     localStorage.setItem("user-location", JSON.stringify(coords))
  //     _setDarkMode(null)
  //     _setUserLocation(coords)
  //   })
  // }

  return (
    <WeatherProvider>
      <MainWrapper style={{ opacity: isClient ? 1 : 0 }}>
        <GlobalStyle />
        <Header />
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
    </WeatherProvider>
  )
}

export default Layout

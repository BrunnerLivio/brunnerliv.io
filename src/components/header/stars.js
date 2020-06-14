import React, { useRef, useEffect, useContext } from "react"
import styled, { createGlobalStyle } from "styled-components"
import colorfn from "color"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { lightTheme, darkTheme } from "../../theme"
import {
  starsBoxShadowOne,
  starsBoxShadowTwo,
  starsBoxShadowThree,
  starsBoxShadowFour,
} from "./stars-constants"

const generateStarsLayer = ({
  size,
  color,
  opacity,
  duration,
  boxShadowFn,
  top,
}) => styled.figure`
  opacity: ${opacity};
  animation: starsAnimation linear infinite;
  border-radius: 200px;
  position: relative;
  box-shadow: ${boxShadowFn(color)};
  width: ${size}px;
  height: ${size}px;
  top: ${top}px;
  animation-duration: ${duration}s;
`

const Stars = () => {
  const starsLayerOneRef = useRef(null)
  const starsLayerTwoRef = useRef(null)
  const starsLayerThreeRef = useRef(null)
  const starsLayerFourRef = useRef(null)

  const themeContext = useContext(ThemeManagerContext)
  const theme = themeContext.isDark ? darkTheme : lightTheme

  const GlobalStyle = createGlobalStyle`
    @keyframes starsAnimation {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(${themeContext.isDark ? 2000 : -2000}px);
      }
    }
  `

  const top = themeContext.isDark ? -1800 : 0

  const StarsLayerOne = generateStarsLayer({
    size: 4,
    color: colorfn(theme.primary).lighten(0.05),
    opacity: 1,
    duration: 200,
    boxShadowFn: starsBoxShadowOne,
    top,
  })

  const StarsLayerTwo = generateStarsLayer({
    size: 8,
    color: colorfn(theme.primary).lighten(0.1),
    opacity: 1,
    duration: 160,
    boxShadowFn: starsBoxShadowTwo,
    top,
  })

  const StarsLayerThree = generateStarsLayer({
    size: 12,
    color: theme.accent,
    opacity: 0.1,
    duration: 120,
    boxShadowFn: starsBoxShadowThree,
    top,
  })

  const StarsLayerFour = generateStarsLayer({
    size: 16,
    color: colorfn(theme.primary).lighten(0.15),
    opacity: 1,
    duration: 100,
    boxShadowFn: starsBoxShadowFour,
    top,
  })

  const updateStars = e => {
    if (!starsLayerOneRef.current) return
    const x = e.pageX - starsLayerOneRef.current.offsetLeft
    const windowWidth = window.innerWidth

    starsLayerFourRef.current.style.left = `-${(x / windowWidth) * 7.5}px`
    starsLayerThreeRef.current.style.left = `-${(x / windowWidth) * 2.5}px`
    starsLayerTwoRef.current.style.left = `-${(x / windowWidth) * 2}px`
    starsLayerOneRef.current.style.left = `-${(x / windowWidth) * 0.5}px`
  }

  // Do not use hooks because we do not want to
  // rerender the bubbles
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", e => updateStars(e))
    window.addEventListener("touchmove", e => updateStars(e))
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("mousemove", updateStars)
      window.removeEventListener("touchemove", updateStars)
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <StarsLayerOne ref={starsLayerOneRef} />
      <StarsLayerTwo ref={starsLayerTwoRef} />
      <StarsLayerThree ref={starsLayerThreeRef} />
      <StarsLayerFour ref={starsLayerFourRef} />
    </>
  )
}

export default Stars

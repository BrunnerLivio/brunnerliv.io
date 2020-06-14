import React, { useRef, useEffect, useContext } from "react"
import styled, { createGlobalStyle } from "styled-components"
import colorfn from "color"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import {
  starsBoxShadowOne,
  starsBoxShadowTwo,
  starsBoxShadowThree,
  starsBoxShadowFour,
} from "./stars-constants"

/**
 * When refactoring the stars layers, take the prod bundle in account.
 * Best case; don't refactor ;)
 */

const StarsLayerOne = styled.figure`
  animation: starsAnimation linear infinite;
  border-radius: 200px;
  position: relative;
  box-shadow: ${(props) =>
    starsBoxShadowOne(colorfn(props.theme.primary).lighten(0.05))};
  width: 4px;
  height: 4px;
  top: ${(props) => (props.theme.name === "dark" ? 0 : -1800)}px;
  animation-duration: 200s;
`

const StarsLayerTwo = styled.figure`
  animation: starsAnimation linear infinite;
  border-radius: 200px;
  position: relative;
  box-shadow: ${(props) =>
    starsBoxShadowTwo(colorfn(props.theme.primary).lighten(0.1))};
  width: 8px;
  height: 8px;
  top: ${(props) => (props.theme.name === "dark" ? 0 : -1800)}px;
  animation-duration: 160s;
`
const StarsLayerThree = styled.figure`
  opacity: 0.1;
  animation: starsAnimation linear infinite;
  border-radius: 200px;
  position: relative;
  box-shadow: ${(props) => starsBoxShadowThree(props.theme.accent)};
  width: 12px;
  height: 12px;
  top: ${(props) => (props.theme.name === "dark" ? 0 : -1800)}px;
  animation-duration: 120s;
`
const StarsLayerFour = styled.figure`
  animation: starsAnimation linear infinite;
  border-radius: 200px;
  position: relative;
  box-shadow: ${(props) =>
    starsBoxShadowFour(colorfn(props.theme.primary).lighten(0.15))};
  width: 16px;
  height: 16px;
  top: ${(props) => (props.theme.name === "dark" ? 0 : -1800)}px;
  animation-duration: 100s;
`

const Stars = () => {
  const starsLayerOneRef = useRef(null)
  const starsLayerTwoRef = useRef(null)
  const starsLayerThreeRef = useRef(null)
  const starsLayerFourRef = useRef(null)

  const themeContext = useContext(ThemeManagerContext)

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

  const updateStars = (e) => {
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
    window.addEventListener("mousemove", (e) => updateStars(e))
    window.addEventListener("touchmove", (e) => updateStars(e))
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

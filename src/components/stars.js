import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import color from "color"
import theme from "../theme/theme"

const rand = (min, max) => Math.floor(Math.random() * max + min)

const generateStarsBoxShadow = color => {
  let boxShadow = "";
  const starsAmount = 400;
  for (let i = 1; i <= starsAmount; i++) {
    boxShadow += `${rand(1, 3000)}px ${rand(1, 10000)}px ${color}`
    if (i !== starsAmount) {
      boxShadow += ", ";
    }
  }
  return boxShadow;
}

const generateStarsLayer = (size, col, duration) => styled.figure`
  animation: animStar linear infinite;
  border-radius: 200px;
  position: relative;
  box-shadow: ${props => generateStarsBoxShadow(col)};
  width: ${size}px;
  height: ${size}px;
  animation-duration: ${duration}s;
`

const StarsLayerOne = generateStarsLayer(4, color(theme.accent).alpha(0.4), 200)
const StarsLayerTwo = generateStarsLayer(
  8,
  color(theme.primary)
    .alpha(0.4)
    .lighten(0.2),
  160
)
const StarsLayerThree = generateStarsLayer(
  12,
  color(theme.accent).alpha(0.2),
  120
)
const StarsLayerFour = generateStarsLayer(
  16,
  color(theme.primary)
    .alpha(0.8)
    .lighten(0.2),
  100
)

const Stars = () => {
  const starsLayerOneRef = useRef(null)
  const starsLayerTwoRef = useRef(null)
  const starsLayerThreeRef = useRef(null)
  const starsLayerFourRef = useRef(null)

  const updateStars = e => {
    if (!starsLayerOneRef.current) return
    const x = e.pageX - starsLayerOneRef.current.offsetLeft
    starsLayerFourRef.current.style.left = `-${x * 0.01}px`
    starsLayerThreeRef.current.style.left = `-${x * 0.008}px`
    starsLayerTwoRef.current.style.left = `-${x * 0.005}px`
    starsLayerOneRef.current.style.left = `-${x * 0.001}px`
  }

  // Do not use hooks because we do not want to
  // rerender the bubbles
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", e => updateStars(e))
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("mousemove", updateStars)
    }
  }, [])
  return (
    <>
      <StarsLayerOne ref={starsLayerOneRef} />
      <StarsLayerTwo ref={starsLayerTwoRef} />
      <StarsLayerThree ref={starsLayerThreeRef} />
      <StarsLayerFour ref={starsLayerFourRef} />
    </>
  )
}

export default Stars

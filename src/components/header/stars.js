import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import createStars from "./stars-canvas"

const rand = (from, to) => Math.floor(Math.random() * to) + from

const Canvas = styled.canvas`
  width: 100%;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.5s ease-in-out;
`

const Stars = ({ opacity }) => {
  const $canvas = useRef(null)

  useEffect(() => {
    if (!$canvas.current) {
      return
    }
    const { destroy } = createStars($canvas.current)

    return () => destroy()
  }, [$canvas])

  return <Canvas opacity={opacity} ref={$canvas} />
}

export default Stars

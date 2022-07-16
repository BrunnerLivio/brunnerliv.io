import React, { useContext } from "react"
import styled from "styled-components"
import { md } from "../breakpoints"
import background from "../../images/stars_small.png"
import { WeatherContext } from "../weather/weatherProvider"

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition: 0.5s ease-in-out opacity;
`

const Canvas = styled.div`
  width: 1500px;
  height: 1500px;

  opacity: ${(props) => props.opacity};
  transition: opacity 0.5s ease-in-out;
  animation: 200s rotate linear infinite forwards reverse;
  transform: rotate(360deg);
  background: url(${background}) repeat;
  ${md`
    width: 3000px;
    height: 3000px;
  `}
`

const Stars = () => {
  const { state } = useContext(WeatherContext)
  // const $canvas = useRef(null)

  // useEffect(() => {
  //   if (!$canvas.current) {
  //     return
  //   }
  //   createStars($canvas.current)

  //   // return () => destroy()
  // }, [$canvas])

  return (
    <StarsContainer style={{ opacity: state.darkMode ? 1 : 0 }}>
      <Canvas />
    </StarsContainer>
  )
}

export default Stars

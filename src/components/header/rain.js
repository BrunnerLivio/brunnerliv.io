import React from "react"
import styled, { css } from "styled-components"

const rain = css`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const RainBackRow = styled.div`
  ${rain}
  display: none;
  z-index: 4;
  bottom: 60px;
  opacity: 0.5;
`

const RainFrontRow = styled.div`
  ${rain}
`

const Drop = styled.div`
  position: absolute;
  bottom: 100%;
  width: 15px;
  height: 120px;
  pointer-events: none;
  animation: drop 0.5s linear infinite;
`


const Stem = styled.div`
  width: 1px;
  height: 60%;
  margin-left: 7px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.25)
  );
  animation: stem 0.5s linear infinite;
`

const Splat = styled.div`
  width: 15px;
  height: 10px;
  border-top: 2px dotted rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  animation: splat 0.5s linear infinite;
  display: none;
`

function RainDrops() {
  let increment = 0
  const drops = []
  const backDrops = []

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1)
    //random number between 5 and 2
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2)
    increment += randoFiver

    drops.push({
      drop: {
        left: increment + "%",
        bottom: randoFiver + randoFiver - 1 + 100 + "%",
        animationDelay: `0.${randoHundo}s`,
        animationDuration: `0.5${randoHundo}s`,
      },
      stem: {
        animationDelay: `0.${randoHundo}s`,
        animationDuration: `0.5${randoHundo}s`,
      },
    })

    backDrops.push({
      drop: {
        left: increment + "%",
        bottom: randoFiver + randoFiver - 1 + 100 + "%",
        animationDelay: `0.${randoHundo}s`,
        animationDuration: `0.5${randoHundo}s`,
      },
      stem: {
        animationDelay: `0.${randoHundo}s`,
        animationDuration: `0.5${randoHundo}s`,
      },
    })
  }

  return { drops, backDrops }
}

function Rain() {
  const { drops, backDrops } = RainDrops()
  return (
    <>
      <RainFrontRow>
        {drops.map((drop) => (
          <Drop style={drop.drop}>
            <Stem style={drop.stem}></Stem>
            <Splat style={drop.stem}></Splat>
          </Drop>
        ))}
      </RainFrontRow>
      <RainBackRow>
        {backDrops.map((drop) => (
          <Drop style={drop.drop}>
            <Stem style={drop.stem}></Stem>
            <Splat style={drop.stem}></Splat>
          </Drop>
        ))}
      </RainBackRow>
    </>
  )
}

export default Rain

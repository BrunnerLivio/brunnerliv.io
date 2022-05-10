import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const OutrunGridPerspective = styled.div`
  perspective: 1000px;
  overflow: hidden;
  height: 300px;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 300px;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.0001) 0%,
      var(--primary-darker) 100%
    );

    position: absolute;
    z-index: 3;
    top: 0;
  }
`

const OutrunGridContainer = styled.div`
  width: 100%;
  height: 660px;
  border: 2px solid var(--accent);
  box-sizing: border-box;
  transform-origin: top;
  transform: rotateX(70deg) translateY(10%);
  overflow: hidden;
`

const Vert = styled.div`
  display: inline-block;
  height: 100%;
  width: 2px;
  background-color: var(--accent);
  margin-left: 12%;
  ${breakpoint("md")`
    margin-left: 4.5%;
  `}
  box-shadow: 0 2px 21px var(--accent);
`

const MovingLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300%;
`

const Hor = styled.div`
  display: inline-block;
  width: 100%;
  height: 3px;
  margin-top: 19%;
  ${breakpoint("md")`
    margin-top: 4.8%;
  `}
  background-color: var(--accent);
  box-shadow: 2px 0 21px var(--accent);
`

function OutrunGrid() {
  return (
    <OutrunGridPerspective>
      <OutrunGridContainer>
        {[...new Array(40)].map((_, index) => (
          <Vert key={"Vert" + index} />
        ))}
        <MovingLines>
          {[...new Array(40)].map((_, index) => (
            <Hor key={"Hor" + index} />
          ))}
        </MovingLines>
      </OutrunGridContainer>
    </OutrunGridPerspective>
  )
}

export default OutrunGrid

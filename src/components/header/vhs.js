import React from "react"
import styled from "styled-components"

const VHSLine = styled.div`
  width: 100%;
  background: ${(props) =>
    props.theme.name === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)"};
  top: 4px;
  height: 2px;
  margin-bottom: 8px;
  position: relative;
`

const VHSContainer = styled.div`
  @keyframes moveLines {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  margin-top: -20px;
  animation: moveLines 2s infinite linear;
  height: 400px;
`

function VHS() {
  return (
    <VHSContainer>
      {[...new Array(30)].map(() => (
        <VHSLine color="rgba(0,0,0,0.2)" />
      ))}
    </VHSContainer>
  )
}

export default VHS

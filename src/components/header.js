import React from "react"
import styled from "styled-components"
import MountainImage from "../images/mountain.svg"
import Stars from "./stars"

const Mountain = styled.div`
  background: url(${MountainImage});
  width: 100%;
  height: 500px;
  bottom: 0;
  position: absolute;
  background-position: -30px bottom;
  background-size: calc(100% + 30px) 100%;
  margin-bottom: -140px;
  z-index: 2;
`

const HeaderWrapper = styled.header`
  margin: 0;
  background: ${props => props.theme.primary};
  background: radial-gradient(
    circle,
    ${props => props.theme.primary},
    ${props => props.theme.primaryDark}
  );
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  padding: 0;
  height: 40vh;
  min-height: 300px;
  overflow: hidden;
`

const Sunset = styled.section`
  width: 100%;
  height: 90%;
  display: block;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    ${props => props.theme.accent}
  );
  background-repeat: repeat-x;
  opacity: 0.38;
  z-index: 1;
`

const _Header = () => (
  <HeaderWrapper>
    <Sunset></Sunset>
    <Stars></Stars>
    <Mountain></Mountain>
  </HeaderWrapper>
)

// Do not rerender if not needed
const Header = React.memo(_Header, () => true)

export default Header

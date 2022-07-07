import React from "react"
import styled from "styled-components"
import { sm, md, lg } from "../breakpoints"

const CloudWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 25px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: ${(props) => props.opacity};
  transition: 0.5s ease-in-out opacity;
`

const Cloud = styled.div`
  width: 100px;
  height: 100px;
  animation: float ${(props) => props.speed}s linear infinite forwards reverse;
  background-repeat: no-repeat;
  position: absolute;
  left: 100%;
  animation-delay: ${(props) => props.delay}s;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 24"><path fill="%23fff" d="M33.85 14.388c-.176 0-.343.034-.513.054a6.272 6.272 0 00-5.993-8.124c-.38 0-.752.039-1.113.104C24.874 2.677 21.293 0 17.083 0c-5.379 0-9.739 4.361-9.739 9.738 0 .418.035.826.084 1.229a6.378 6.378 0 00-1.155-.11 6.273 6.273 0 00-.001 12.544c.214 0 27.156.109 27.577.109a4.561 4.561 0 00.001-9.122z"/></svg>');
  top: ${(props) => props.top}px;
  z-index: ${(props) => props.zIndex || 1};
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2));

  transform: scale(${(props) => props.scale * 0.4});
  ${(props) => `
   @media screen and (min-width: 36em) {
     transform: scale(${props.scale * 0.6});
   }`}

  ${(props) => `
   @media screen and (min-width: 48em) {
     transform: scale(${props.scale * 0.8});
   }`}
   ${(props) => `
   @media screen and (min-width: 62em) {
     transform: scale(${props.scale});
   }`}


  &:nth-child(n+5) {
    display: none;
    ${sm`
    display: block;
    `}
  }

  &:nth-child(n + 6) {
    display: none;
    ${md`
      display: block;
    `}
  }
`

const Clouds = ({ opacity }) => {
  return (
    <CloudWrapper opacity={opacity}>
      <Cloud top={0} speed={120} scale={1} delay={0} />
      <Cloud top={30} speed={110} scale={0.7} delay={30} />
      <Cloud top={50} speed={75} scale={0.3} delay={-40} />
      <Cloud top={80} speed={100} scale={1.1} zIndex={999} delay={-5} />
      <Cloud top={100} speed={170} scale={1.2} delay={-120} />
      <Cloud top={110} speed={140} scale={0.9} delay={-80} zIndex={999} />
      <Cloud top={150} speed={80} scale={0.6} delay={-30} zIndex={999} />
      <Cloud top={180} speed={90} scale={0.8} delay={-80} />
    </CloudWrapper>
  )
}

export default Clouds

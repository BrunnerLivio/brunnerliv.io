import React from "react"
import styled from "styled-components"

const Button = styled.button`
  position: relative;
  z-index: 999;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  fill: var(--text);
  cursor: pointer;

  ${(props) =>
    props.active
      ? `
    fill: var(--accent);
  `
      : ""}

  svg {
    width: 24px;
  }
`

const LoadingSVG = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: var(--text);
  animation: 2s rotate linear infinite forwards reverse;
`;

function LocationToggle({ onClick, active, isLoading }) {
  if (isLoading) {
    return (
      <LoadingSVG
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 26.349 26.35"
      >
        <g>
          <circle cx="13.792" cy="3.082" r="3.082" />
          <circle cx="13.792" cy="24.501" r="1.849" />
          <circle cx="6.219" cy="6.218" r="2.774" />
          <circle cx="21.365" cy="21.363" r="1.541" />
          <circle cx="3.082" cy="13.792" r="2.465" />
          <circle cx="24.501" cy="13.791" r="1.232" />
          <path
            d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"
          />
          <circle cx="21.364" cy="6.218" r="0.924" />
        </g>
      </LoadingSVG>
    )
  }
  return (
    <Button active={active} onClick={onClick}>
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width="32px"
        height="24px"
        viewBox="0 0 395.71 395.71"
      >
        <g>
          <path
            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
          c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
          C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
          c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
          />
        </g>
      </svg>
    </Button>
  )
}
export default LocationToggle

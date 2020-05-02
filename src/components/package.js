import React from "react"
import styled from "styled-components"
import color from "color"

const Path = styled.path`
  fill: ${props =>
    color(props.theme.primaryLight)
      .fade(0.55)
      .toString()};
`

function PackageIcon({ height, className }) {
  return (
    <svg className={className} viewBox="0 0 1024 1024" height={height}>
      <Path d="M480 64L0 192v576l480 128 480-128V192L480 64zM63.875 720.934L63.5 288l384.498 102.533 0.001 432.833L63.875 720.934zM63.5 224l160.254-42.734L640 292.265v0.135l-160 42.667L63.5 224zM896.125 720.934L512.001 823.366l0.001-432.833L640 356.4v156l128-34.135V322.267L896.5 288 896.125 720.934zM768 258.26700000000005v-0.125L351.734 147.13800000000003 480 112.93399999999997 896.5 224 768 258.26700000000005z" />
    </svg>
  )
}

export default PackageIcon

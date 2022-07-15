import React, { useCallback } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

import useIsClient from "./hooks/useIsClient"

const DarkModeToggle = (props) => {
  const { isClient } = useIsClient()

  const onChange = useCallback(
    (isChecked) => {
      props?.onChange?.(isChecked)
    },
    [props]
  )

  if (!isClient) return null

  let moonColor = "var(--accent)"
  let sunColor = "#EFC933"

  if (!props.active) {
    moonColor = "var(--text)"
    sunColor = "var(--text)"
  }

  return (
    <DarkModeSwitch
      style={{ filter: "drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.3))" }}
      moonColor={moonColor}
      sunColor={sunColor}
      checked={props.checked}
      onChange={onChange}
      size={32}
    />
  )
}

export default DarkModeToggle

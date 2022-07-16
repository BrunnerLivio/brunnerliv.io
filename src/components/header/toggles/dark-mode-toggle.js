import React from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const DarkModeToggle = ({ checked, onChange, active }) => {
  let moonColor = "var(--accent)"
  let sunColor = "#EFC933"

  if (!active) {
    moonColor = "var(--text)"
    sunColor = "var(--text)"
  }

  return (
    <DarkModeSwitch
      moonColor={moonColor}
      sunColor={sunColor}
      checked={checked}
      onChange={() => onChange()}
      size={32}
    />
  )
}

export default DarkModeToggle

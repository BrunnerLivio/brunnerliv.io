import React from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const DarkModeToggle = ({ checked, onChange, active, disabled }) => {
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
      onChange={() => !disabled && onChange()}
      size={32}
      style={{ opacity: disabled ? "0.5" : "1" }}
    />
  )
}

export default DarkModeToggle

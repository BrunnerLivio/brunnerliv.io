import React, { useCallback, useState } from "react"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import useIsClient from "./hooks/useIsClient"

const DarkModeToggle = (props) => {
  const [checked, setChecked] = useState(props.checked)
  const { isClient } = useIsClient()

  const onChange = useCallback(
    (isChecked) => {
      setChecked(isChecked)
      window.__setPreferredTheme(isChecked ? "dark" : "light")
      props?.onChange?.(isChecked)
    },
    [setChecked, props]
  )

  if (!isClient) return null

  return <DarkModeSwitch style={{ filter: "drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.3))"}} moonColor="var(--accent)" sunColor="#EFC933"  checked={checked} onChange={onChange} size={32} />
}

export default DarkModeToggle

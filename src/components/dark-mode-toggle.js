import React, { useCallback, useState } from "react"
import Toggle from "./toggle"

import moon from "../images/moon.png"
import sun from "../images/sun.png"

const DarkModeToggle = (props) => {
  const [checked, setChecked] = useState(window.__theme === "dark")

  const onChange = useCallback(
    (e) => {
      const isChecked = e.target.checked
      setChecked(isChecked)
      window.__setPreferredTheme(isChecked ? "dark" : "light");
      props?.onChange?.(isChecked);
    },
    [setChecked]
  )

  return (
    <Toggle
      icons={{
        checked: (
          <img
            src={moon}
            width="16"
            height="16"
            alt="Moon"
            style={{ pointerEvents: "none" }}
          />
        ),
        unchecked: (
          <img
            src={sun}
            width="16"
            height="16"
            alt="Sun"
            style={{ pointerEvents: "none" }}
          />
        ),
      }}
      checked={checked}
      onChange={onChange}
    />
  )
}

export default DarkModeToggle

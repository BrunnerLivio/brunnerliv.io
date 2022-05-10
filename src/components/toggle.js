import React, { useState } from "react"
import styled from "styled-components"

const ToggleWrapper = styled.div`
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: var(--accent);
    transition: all 0.2s ease;
  }

  .react-toggle-track-check {
    position: absolute;
    width: 17px;
    height: 17px;
    left: 5px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &.react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 17px;
    height: 17px;
    right: 5px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  &.react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: translateX(0);
    box-shadow: 0 0 0 3px var(--primary-dark);
  }

  &.react-toggle--checked .react-toggle-thumb {
    transform: translateX(26px);
    border-color: #19ab27;
  }
`

// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts
function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const changedTouches = event.changedTouches
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0]
      return { x: touch.clientX, y: touch.clientY }
    }
    const pageX = event.pageX
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY }
    }
  }
  return { x: 0, y: 0 }
}

const Toggle = ({
  checked,
  defaultChecked,
  onFocus,
  onBlur,
  icons,
  className,
  disabled,
  ...inputProps
}) => {
  let previouslyChecked = !!(checked || defaultChecked)
  let startX
  let touchMoved
  let touchStarted
  let hadFocusAtTouchStart
  let input
  let moved

  const [state, setState] = useState({
    checked: !!(checked || defaultChecked),
    hasFocus: false,
  })
  function handleClick(event) {
    const checkbox = input
    previouslyChecked = checkbox.checked
    if (event.target !== checkbox && !moved) {
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    setState({ ...state, checked: checkbox.checked })
  }

  function handleTouchStart(event) {
    startX = pointerCoord(event).x
    touchStarted = true
    hadFocusAtTouchStart = state.hasFocus
    setState({ ...state, hasFocus: true })
  }

  function handleTouchMove(event) {
    if (!touchStarted) return
    touchMoved = true

    if (startX != null) {
      let currentX = pointerCoord(event).x
      if (state.checked && currentX + 15 < startX) {
        setState({ ...state, checked: false })
        startX = currentX
      } else if (!state.checked && currentX - 15 > startX) {
        setState({ ...state, checked: true })
        startX = currentX
      }
    }
  }

  function handleTouchEnd(event) {
    if (!touchMoved) return
    const checkbox = input
    event.preventDefault()

    if (startX != null) {
      if (previouslyChecked !== state.checked) {
        checkbox.click()
      }

      touchStarted = false
      startX = null
      touchMoved = false
    }

    if (!hadFocusAtTouchStart) {
      setState({ ...state, hasFocus: false })
    }
  }

  function handleTouchCancel(event) {
    if (startX != null) {
      touchStarted = false
      startX = null
      touchMoved = false
    }

    if (!hadFocusAtTouchStart) {
      setState({ ...state, hasFocus: false })
    }
  }

  function handleFocus(event) {
    if (onFocus) {
      onFocus(event)
    }

    hadFocusAtTouchStart = true
    setState({ ...state, hasFocus: true })
  }

  function handleBlur(event) {
    if (onBlur) {
      onBlur(event)
    }

    hadFocusAtTouchStart = false
    setState({ ...state, hasFocus: false })
  }

  function getIcon(type) {
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type]
  }

  const classes =
    "react-toggle" +
    (state.checked ? " react-toggle--checked" : "") +
    (state.hasFocus ? " react-toggle--focus" : "") +
    (disabled ? " react-toggle--disabled" : "") +
    (className ? " " + className : "")

  return (
    <ToggleWrapper
      className={classes}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className="react-toggle-track">
        <div className="react-toggle-track-check">{getIcon("checked")}</div>
        <div className="react-toggle-track-x">{getIcon("unchecked")}</div>
      </div>
      <div className="react-toggle-thumb" />

      <input
        {...inputProps}
        ref={ref => {
          input = ref
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="react-toggle-screenreader-only"
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </ToggleWrapper>
  )
}
export default Toggle

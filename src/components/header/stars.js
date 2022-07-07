import React from "react"
import styled from "styled-components"
import colorfn from "color"

const rand = (from, to) => Math.floor(Math.random() * to) + from

const Canvas = styled.canvas`
  width: 100%;
  opacity: ${props => props.opacity};
  transition: opacity 0.5s ease-in-out;
  transition-delay: 0.5s;
`

class Bubble {
  init = { x: 0, y: 0, framenumber: 0 }
  size
  ctx
  y
  x

  constructor(type, x, y, size, ctx, framenumber, direction) {
    this.type = type
    this.init.x = x
    this.init.y = y
    this.init.framenumber = framenumber
    this.size = size
    this.ctx = ctx
    this.direction = direction
  }

  update(framenumber, colors) {
    if (this.direction === "down") {
      this.y =
        this.init.y + (framenumber - this.init.framenumber) / (this.type * 2)
    } else {
      this.y =
        this.init.y - (framenumber - this.init.framenumber) / (this.type * 2)
    }

    this.x = this.init.x
    this.ctx.fillStyle = colors[this.type]
    this.ctx.beginPath()

    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  setDirection(direction) {
    this.direction = direction
    this.init.y = rand(0, 440)
  }
}

class Stars extends React.Component {
  HEIGHT = 450
  canvas
  ctx
  bubbles = []
  frameNumber = 0
  colors
  state = {
    width: 0,
    height: 0,
  }

  starDensity = 100

  constructor() {
    super()
    this.canvasRef = React.createRef()
  }

  createRandomBubble(xval, yval) {
    const x = xval || rand(0, this.canvas.width)
    const y = yval || (this.props.direction === "down" ? -20 : this.HEIGHT)

    switch (rand(1, 4)) {
      case 4:
        return new Bubble(
          4,
          x,
          y,
          3,
          this.ctx,
          this.frameNumber,
          this.props.direction
        )
      case 3:
        return new Bubble(
          3,
          x,
          y,
          4,
          this.ctx,
          this.frameNumber,
          this.props.direction
        )
      case 2:
        return new Bubble(
          2,
          x,
          y,
          5,
          this.ctx,
          this.frameNumber,
          this.props.direction
        )
      case 1:
        return new Bubble(
          1,
          x,
          y,
          7,
          this.ctx,
          this.frameNumber,
          this.props.direction
        )
      default:
        return
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    if (this.bubbles.length < this.starDensity) {
      this.bubbles.push(this.createRandomBubble())
    }

    this.bubbles.forEach((bubble) => {
      bubble.update(this.frameNumber, this.colors)
    })

    this.frameNumber++
    this.bubbles = this.bubbles.filter((b) => {
      if (this.props.direction === "down") {
        return b.y < this.HEIGHT + 40
      } else {
        return b.y > -40
      }
    })
    window.requestAnimationFrame(this.draw.bind(this))
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  updateColors() {
    const accent = getComputedStyle(document.documentElement).getPropertyValue(
      "--accent"
    )
    const primary = getComputedStyle(document.documentElement).getPropertyValue(
      "--primary"
    )

    const accentFaded = colorfn(accent).fade(0.9).toString()
    const primaryLight = colorfn(primary).lighten(0.1).toString()
    const primaryLighter = colorfn(primary).lighten(0.2).toString()

    if(this.props.direction === "up") 
    {
      this.colors = [accentFaded, primaryLight, accentFaded, primaryLighter]
    } else {
      this.colors = ["transparent","transparent","transparent","transparent"]
    }
  }

  registerBubbles() {
    this.bubbles = new Array(this.starDensity)
      .fill()
      .map(() =>
        this.createRandomBubble()
      )
    
      this.bubbles.forEach((bubble) => bubble.setDirection(this.props.direction))
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    this.updateColors()

    this.canvas = this.canvasRef.current
    this.ctx = this.canvas.getContext("2d")

    this.registerBubbles()

    this.draw()
  }

  componentDidUpdate(...arg) {
    this.updateColors()
    this.registerBubbles()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  render() {
    return (
      <Canvas
        width={this.state.width}
        height={this.state.width}
        ref={this.canvasRef}
        opacity={this.props.opacity}
      ></Canvas>
    )
  }
}

const MemoizedStars = React.memo(Stars)

export default MemoizedStars
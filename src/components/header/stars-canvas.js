class Particle {
  constructor(x, y, radius, color, c) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.c = c
  }

  draw() {
    this.c.beginPath()
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.c.shadowColor = this.color
    this.c.shadowBlur = 15
    this.c.fillStyle = this.color
    this.c.fill()
    this.c.closePath()
  }

  update() {
    this.draw()
  }
}

function createStars(canvas) {
  let mouseDown = false

  const onScroll = () => {
    const currentScroll = document.documentElement.scrollTop
    if (currentScroll < 500) {
      mouseDown = true

      window.setTimeout(() => {
        if (currentScroll === document.documentElement.scrollTop) {
          mouseDown = false
        }
      }, 300)
    }
  }

//   const onResize = () => {
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight

//     init()
//   }

  const c = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

//   const mouse = {
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   }

  const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"]
  window.addEventListener("scroll", onScroll)

  // Implementation
  let particles
  function init() {
    particles = []

    for (let i = 0; i < 1500; i++) {
      const canvasWidth = canvas.width + 1000
      const canvasHeight = canvas.height + 2000

      const x = Math.random() * canvasWidth - canvasWidth / 2
      const y = Math.random() * canvasHeight - canvasHeight / 2
      const radius = 2 * Math.random()

      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push(new Particle(x, y, radius, color, c))
    }
  }

  // Animation Loop
  let radians = 0
  let alpha = 1
  let requestId = null
  function animate() {
    requestId = requestAnimationFrame(animate)
    c.fillStyle = `rgba(37,33,95,${alpha})`
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.save()
    c.translate(canvas.width / 2, canvas.height / 2)
    c.rotate(radians)
    particles.forEach((particle) => {
      particle.update()
    })
    c.restore()

    radians += 0.0008

    if (mouseDown && alpha >= 0.1) {
      alpha -= 0.06
    } else if (!mouseDown && alpha < 1) {
      alpha += 0.06
    }
  }

  init()
  animate()

  return {
    destroy: () => {
      window.removeEventListener("scroll", onScroll)
      if (requestId !== null) {
        window.cancelAnimationFrame(requestId)
      }
    },
  }
}

export default createStars

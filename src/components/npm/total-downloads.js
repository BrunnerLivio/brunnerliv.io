import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import CountUp from "react-countup"
import PackageIcon from "../package"
import Confetti from "react-dom-confetti"

const easingFn = function (t, b, c, d) {
  var ts = (t /= d) * t
  var tc = ts * t
  return b + c * (tc + -3 * ts + 3 * t)
}

const PackagesDownloads = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 92px;
  margin-top: 32px;
  width: 420px;
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
  position: relative;
  .count-up {
    font-weight: 200;
    font-size: 84px;
    color: var(--accent);
    @media only screen and (max-width: 450px) {
      font-size: 64px;
    }
    position: relative;
    z-index: 1;
  }
`

const PackageDownloadsSubtitle = styled.div`
  position: relative;
  font-weight: bold;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    position: absolute;
    background: var(--accent);
    top: 12px;
    border-radius: 4px;
    @media only screen and (max-width: 450px) {
      width: 32px;
    }
  }
  &::after {
    right: 0;
  }
`

const PackagesDownloadsContainer = styled.section`
  display: flex;
  justify-content: center;
`

function PkgAnim({ x, y, d }) {
  const rotation = Math.floor(Math.random() * 720) + 50
  const key = `${x}-${y}-${rotation}`
  const Animation = createGlobalStyle`
    @keyframes pkganimation-${key} {
      from {
        transform: translate(0, 0);
        opacity: 1;
      }
      to {
        transform: translate(${x}px, ${y}px) rotate(${rotation}deg);
        opacity: 0;
      }
    }
    .package-anim-${key} {
      position: absolute;
      animation: pkganimation-${key} 3s ease-out;
      animation-fill-mode: forwards;
      top: 50px;
      left: 140px;
      z-index: 0;
      animation-delay: ${d}s;
      opacity: 0;
    }
  `
  return (
    <>
      <Animation />
      <PackageIcon className={`package-anim-${key}`} height={32}></PackageIcon>
    </>
  )
}

const Pkg = React.memo(PkgAnim)

function TotalDownloads() {
  const { npmStats } = useStaticQuery(graphql`
    query NpmStatsQuery {
      npmStats {
        totalDownloads
        totalRepos
        repos {
          downloads
          repo
        }
      }
    }
  `)
  const [showConfetti, setShowConfetti] = useState(false)
  const config = {
    angle: 90,
    spread: 30,
    startVelocity: 20,
    elementCount: 20,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  }

  return (
    <PackagesDownloadsContainer>
      <PackagesDownloads>
        <CountUp
          className={"count-up"}
          end={npmStats && npmStats.totalDownloads}
          useEasing={true}
          separator={","}
          easingFn={easingFn}
          duration={3}
          onEnd={() => setShowConfetti(true)}
        />
        <Pkg d={0} x={-150} y={40} />
        <Pkg d={0.5} x={255} y={48} />
        <Pkg d={1} x={-300} y={-40} />
        <Pkg d={1.5} x={255} y={-60} />
        <Pkg d={2} x={-200} y={-20} />
        <Pkg d={2.5} x={150} y={80} />
        <Pkg d={3} x={-320} y={100} />
        <Pkg d={3.5} x={280} y={69} />
        <Pkg d={4} x={-305} y={-69} />
        <Pkg d={4.5} x={-200} y={120} />
        <PackageDownloadsSubtitle>
          Package Downloads via npm
        </PackageDownloadsSubtitle>
        <Confetti active={showConfetti} config={config} />
        <Confetti active={showConfetti} config={{ ...config, angle: 30 }} />
        <Confetti
          active={showConfetti}
          config={{ ...config, startVelocity: 30, angle: 20 }}
        />
      </PackagesDownloads>
    </PackagesDownloadsContainer>
  )
}

export default TotalDownloads

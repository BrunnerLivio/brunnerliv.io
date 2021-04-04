import styled from "styled-components"
import React, { useState, useEffect } from "react"
import NeonText from "./neon-text"

const Card = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`

const CardTitle = styled.div`
  text-align: center;
  margin-bottom: 16px;
  font-size: 1.5em;
`

const CardHeader = styled.header`
  height: 180px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Date = styled.span`
  margin-right: 8px;
  margin-left: 0%;
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9em;
`

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

const Talk = ({ talk }) => {
  const size = useWindowSize()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <NeonText text={talk.title}></NeonText>
        </CardTitle>
        <Date>{talk.date}</Date>
      </CardHeader>

      {size && size.width && (
        <iframe
          width={size.width > 480 ? 480 : size.width - 80}
          height="400"
          title={talk.title}
          src={talk.youtube}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      )}
    </Card>
  )
}

export default Talk

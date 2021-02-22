import styled from "styled-components"
import React from "react"
import _NeonText from "./neon-text"

const Card = styled.div`
  width: 500px;
  height: 500px;
`

const NeonText = styled(_NeonText)`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 16px;
`

const CardHeader = styled.header`
  height: 100px;
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

const Talk = ({ talk }) => {
  return (
    <Card>
      <CardHeader>
        <NeonText>{talk.title}</NeonText>

        <Date>{talk.date}</Date>
      </CardHeader>

      <iframe
        width="500"
        height="400"
        src={talk.youtube}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Card>
  )
}

export default Talk

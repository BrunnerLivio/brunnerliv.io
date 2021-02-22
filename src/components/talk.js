import styled from "styled-components"
import React from "react"
import NeonText from "./neon-text"

const Card = styled.div`
  width: 500px;
  height: 500px;
`

const CardTitle = styled.div`
  text-align: center;
  margin-bottom: 16px;
  font-size: 1.5em;
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
        <CardTitle>
          <NeonText text={talk.title}></NeonText>
        </CardTitle>
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

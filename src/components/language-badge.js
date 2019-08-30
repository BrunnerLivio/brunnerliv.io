import React from "react"

import styled from "styled-components"

const Badge = styled.span`
  font-size: 10px;
  margin-left: 6px;
  border-radius: 8px;
  padding: 4px 8px;
  font-weight: 500;
  display: block;
  &.lang-javascript {
    background: rgb(241, 224, 90);
    color: rgba(0, 0, 0, 0.7);
  }
  &.lang-typescript {
    background: rgb(0, 122, 204);
    color: rgba(255, 255, 255, 0.7);
  }
  &.lang-python {
    background: rgb(53, 110, 158);
    color: rgba(255, 255, 255, 0.7);
  }
  &.lang-nestjs {
    background: #e0234e;
    color: rgba(255, 255, 255, 0.7);
  }
  &.lang-vuejs {
    background: #34495e;
    color: rgba(255, 255, 255, 0.7);
  }
  &.lang-react {
    background: #61dafb;
    color: rgba(0, 0, 0, 0.7);
  }
  &.lang-nodejs {
    background: #026E00;
    color: #eaf5e9;
  }
  &.lang-angular {
    background: #DD0031;
    color: #fff;
  }
`

const LanguageBadge = ({ language }) => (
  <Badge className={`lang-${language.toLowerCase().replace(/\./g, "")}`}>
    {language}
  </Badge>
)

export default LanguageBadge

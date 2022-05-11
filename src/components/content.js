import styled from "styled-components"
import { md } from "./breakpoints"

const Content = styled.section`
  margin-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  ${md`
    flex-direction: row;
    width: 700px;
  `}
`

export default Content;
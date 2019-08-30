import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const Content = styled.section`
  margin-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  ${breakpoint("md")`
    flex-direction: row;
    width: 700px;
  `}
`

export default Content;
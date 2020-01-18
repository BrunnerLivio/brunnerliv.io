import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import oops from "../images/oops.png"
import { Link } from "gatsby"

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const EscapeLink = styled(Link)`
  font-size: 18px;
  margin-bottom: 32px;
`;
const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <h2>You are not supposed to see this...</h2>
    <EscapeLink to="/">Let's get back, shall we?</EscapeLink>
    <img height="300" src={oops} alt="Livio in a bra" />
  </Wrapper>
)

export default NotFoundPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const EgoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  flex-direction: column;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const TitleIntroduction = styled.h3`
  width: 500px;
  font-size: 2.5em;
  margin-right: 20px;
  text-align: right;
`;

const ParagrahIntroduction = styled.p`
  width: 500px;
`;

const Separator = styled.hr`
  width: 60%;
  height: 2px;
  background: linear-gradient(to right, ${props => props.theme.accent} 0%, ${props => props.theme.primary} 100%);
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <EgoSection>
      <Wrapper>
        <TitleIntroduction>Hi, I'm Livio Brunner, a software developer from Switzerland.</TitleIntroduction>
        <ParagrahIntroduction>
          I am a passionate developer and open sourcerer. My current position
          at <a rel="noopener noreferrer" target="_blank" href="https://www.roche.com/about/business/diagnostics.htm">Roche Diagnostics</a> revolves around technical guidance for a common UI library built with Angular. In my spare-time
          I develop at <a href="http://nestjs.com/" rel="noopener noreferrer" target="_blank">NestJS</a>, a progressive Node.js framework built on top of TypeScript. 
        </ParagrahIntroduction>
      </Wrapper>
      <Separator />
      <Wrapper>
        {/* Put Social */}
      </Wrapper>
    </EgoSection>
  </Layout>
)

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const EgoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <EgoSection>
      <div>
        <h1>Livio Brunner</h1>
      </div>
    </EgoSection>
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/Layout"

import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

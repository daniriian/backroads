import React from "react"
import Layout from "../components/Layout"

import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

import About from "../components/Home/About"
import Services from "../components/Home/Services"

import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <Layout>
      <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="In eiusmod consectetur id do excepteur ullamco nisi minim nostrud irure
        magna magna in."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export default Home

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

import SimpleHero from "../components/SimpleHero"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const Home = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="In eiusmod consectetur id do excepteur ullamco nisi minim nostrud irure
        magna magna in."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}

export default Home

import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const query = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  return (
    <section className={styles.about}>
      Hello from about
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company"></img> */}
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            tenetur tempora cupiditate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            tenetur tempora cupiditate!
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About

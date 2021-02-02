import React from "react"
import TourList from "./TourList"
import { graphql, useStaticQuery } from "gatsby"

const getTours = graphql`
  query {
    allTours: allContentfulTour {
      edges {
        node {
          country
          days
          price
          name
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { allTours } = useStaticQuery(getTours)
  return <TourList tours={allTours} />
}

export default Tours

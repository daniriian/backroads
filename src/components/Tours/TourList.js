import React, { Component } from "react"
import Tour from "../Tours/Tour"
import Title from "../Title"

import styles from "../../css/items.module.css"

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    console.log(this.state.tours)
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {this.state.tours.map(({ node }) => {
            return <Tour tour={node} key={node.contentful_id} />
          })}
        </div>
      </section>
    )
  }
}

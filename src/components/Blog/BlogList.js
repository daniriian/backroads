import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          slug
          title
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          id: contentful_id
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <section className={styles.blog}>
      <Title titkle="Our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  )
}

export default BlogList

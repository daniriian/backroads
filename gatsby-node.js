exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.allContentfulTour.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `tours/${slug}`,
      component: require.resolve(`./src/templates/tour-template.js`),
      context: { slug: slug },
    })
  })
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.posts.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/blog-template.js`),
      context: { slug: slug },
    })
  })

  const posts = data.posts.edges
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/blogs" : `/blogs/${i + 1}`,
      component: require.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

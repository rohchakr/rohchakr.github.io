/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const aboutTemplate = require.resolve(`./src/templates/aboutTemplate.js`)
    const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        let component = aboutTemplate

        switch (node.frontmatter.slug.split('/')[1]) {
            case 'about':
                component = aboutTemplate
                break
            case 'blog':
                component = blogTemplate
        }

        createPage({
            path: node.frontmatter.slug,
            component: component,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
            },
        })
    })
  }
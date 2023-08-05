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
          sort: {frontmatter: {date: DESC}}
          limit: 1000
        ) {
          edges {
            node {
              fields {
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

        switch (node.fields.slug.split('/')[1]) {
            case 'about':
                component = aboutTemplate
                break
            case 'blog':
                component = blogTemplate
        }

        createPage({
            path: node.fields.slug,
            component: component,
            context: {
                // additional data can be passed via context
                slug: node.fields.slug,
            },
        })
    })
  }


// Create custom fields
// https://www.gatsbyjs.com/docs/creating-slugs-for-pages/
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createSlug(createFilePath({ node, getNode, basePath: `docs` }))

    createNodeField({
        node,
        name: `slug`,
        value: slug,
    })
  }
}

createSlug = (filePath) => {
    // FIXME: Use regex to hide long paths for blogs
    return filePath
}
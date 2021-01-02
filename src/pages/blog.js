import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostLink = ({ post }) => (
    <div className="blogContents">
        <h4>
          <Link to={post.fields.slug}>{post.frontmatter.title} ({post.frontmatter.date})
          </Link>
        </h4>
    </div>
  )

const BlogIndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.fields.slug.split('/')[1] === 'blog') // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout navLocation="blog">
      <SEO title="Blog" />
      <div>{Posts}</div>
    </Layout>
  )
}

export default BlogIndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
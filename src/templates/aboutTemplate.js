import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const linkStyle = {
  color: `#f5ebc8`,
  backgroundColor: `#643c28`,
  textDecoration: `none`
}

const notificationStyle = {
  color: `#f5ebc8`,
  backgroundColor: `#321905`,
  padding: `1.45rem`,
  borderRadius: `3px`
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout navLocation="about">
        <SEO title="About" />
        <div className="blog-post-container">
        <div className="blog-post">
            <p style={notificationStyle}>Please head over to the <Link to='/career-timeline/' style={linkStyle}>Career Timeline</Link> page if you are more interested in my professional journey.</p>
            {/* <h2>{frontmatter.date}</h2> */}
            {/* frontmatter has two more fields 'date' and 'last-edited-date' - to be used for v2*/}
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
            {/* <Link to="/">Go back to the homepage</Link> */}
        </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
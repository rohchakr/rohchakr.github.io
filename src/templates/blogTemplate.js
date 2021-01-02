import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { VscCalendar } from "react-icons/vsc"
import { VscArrowLeft } from "react-icons/vsc"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout navLocation="blog">
        <SEO title="Blog" />
        <div className="blog-post-container">
        <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h6 className="blog-post-caption">
            <ul>
              <li>
                <VscCalendar /> <p>{frontmatter.date}</p>
              </li>
              <li>
                Author:<p>Rohit Chakraborty</p>
              </li>
            </ul>
            </h6>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="/blog/"><VscArrowLeft /></Link>
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
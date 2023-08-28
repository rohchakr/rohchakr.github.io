import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { VscCalendar } from "react-icons/vsc"
import { VscArrowLeft } from "react-icons/vsc"

import Layout from "../components/layout"
import OnThisPage from "../components/on-this-page"
import Comments from "../components/comments"
import { SEO } from "../components/seo"
import * as blogTemplateStyles from "./blogTemplate.module.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const title = `${frontmatter.title} | rohchakr`
  const featuredImage = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

  return (
    <Layout navLocation="blog" rightSideContent={<OnThisPage toc={tableOfContents} />}>
      <SEO title={title} />
      <div className={blogTemplateStyles.Container}>
        <div className={blogTemplateStyles.BlogPostFeaturedArea}>
          <GatsbyImage image={featuredImage} alt={frontmatter.featuredImageAltText} placeholder="blurred" loading="lazy"/>
          <div className={blogTemplateStyles.BlogPostFeaturedAreaTextContainer}>
            <div className={blogTemplateStyles.BlogPostFeaturedAreaContentSeparator}>
            </div>
            <div className={blogTemplateStyles.BlogPostFeaturedAreaTextContent}>
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
            </div>
          </div>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link to="/blog/"><VscArrowLeft /></Link>
        <Comments />
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
        featuredImageAltText
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      tableOfContents
    }
  }
`
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&family=Source+Code+Pro&display=swap" rel="stylesheet" />
  </>
)

const Layout = ({ children, navLocation, rightSideContent, leftSideContent }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="screenContainer">
      <div id="headerWrapper">
        <Header siteTitle={data.site.siteMetadata.title} navLocation={navLocation} />
      </div>
      <div id="middleSection">
        <div id="leftSideWrapper">
          <aside>{leftSideContent}</aside>
        </div>
        <div id="mainWrapper"
          style={{
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <div id="rightSideWrapper">
          <aside>{rightSideContent}</aside>
        </div>
      </div>
      <div id="footerWrapper">
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  navLocation: ``,
}

export default Layout

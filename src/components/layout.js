/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GoogleFontLoader from "react-google-font-loader"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, navLocation }) => {
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
    <>
    <GoogleFontLoader
    fonts={[
      {
        font: 'Roboto',
        weights: [400],
        // weights: [400, '400i'],
      },
      {
        font: 'Roboto Mono',
        weights: [400],
        // weights: [400, 700],
      },
      {
        font: 'Source Code Pro',
        weights: [400],
      },
    ]}
  />
      <div id="headerWrapper">
        <Header siteTitle={data.site.siteMetadata.title} navLocation={navLocation}/>
      </div>
      <div id="mainWrapper"
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <div id="footerWrapper">
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  navLocation: ``,
}

export default Layout

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout navLocation="about">
    <SEO title="About" />
    <h1>About</h1>
    <p>Namaste</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage

import React from "react"

import Layout from "../components/layout"
import LnBadgeComponent from "../components/linkedin-badge"
import { SEO } from "../components/seo"

const PortfolioPage = () => (
  <Layout navLocation="portfolio">
    <SEO title="Portfolio | rohchakr" />
    <LnBadgeComponent />
  </Layout>
)

export default PortfolioPage

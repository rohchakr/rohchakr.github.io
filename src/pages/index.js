import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const spanStyle = {
  color: `#643c28`
}

const linkStyle = {
  color: `#321905cc`,
  backgroundColor: `#f5ebc8`,
  textDecoration: `none`
}

const IndexPage = () => (
  <Layout navLocation="home">
    <SEO title="Home" />
    <h1>Hi,</h1>
    <p>Greetings from <span style={spanStyle}>Rohit Chakraborty</span>! So glad to see you here.</p>
    <p>This website is intended to share my <Link to="/career-timeline/" style={linkStyle}>professional journey</Link>, <Link to="/blog/" style={linkStyle}>technical notes</Link>, <Link to="/blog/" style={linkStyle}>lifestyle preferences</Link> and <Link to="/blog/" style={linkStyle}>general life experience</Link>. It also helps me getting more organized, perform experiments and improve my <i>Web Development</i>, <i>Automation</i>, <i>Product Strategy</i> and <i>Communication skills</i>.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage

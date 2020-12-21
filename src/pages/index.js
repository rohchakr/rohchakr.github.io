import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout navLocation="home">
    <SEO title="Home" />
    <h1>Hi,</h1>
    <p>Greetings from Rohit Chakraborty! So glad to see you here.</p>
    <p>This website is intended to share my professional journey, technical how-to's, lifestyle preferences and general life experience. It also helps me getting more organized, perform experiments and improve my Web Development, Automation and Product Strategy and Communication skills.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage

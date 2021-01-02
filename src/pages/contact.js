import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ContactSection from "../components/contact-area"
import SEO from "../components/seo"

const headingText = 'Follow and/or drop me a line at:'

const ContactPage = () => (
  <Layout navLocation="contact">
    <SEO title="Contact" />
    <ContactSection headingText={headingText}/>
  </Layout>
)

export default ContactPage

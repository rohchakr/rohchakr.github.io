import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ContactSection from "../components/contact-area"
import { SEO } from "../components/seo"

const headingText = 'Follow and/or drop me a line at:'
const contactImage = "../images/Contact_Image.jpeg"
const contactImageAltText = "A flying pigeon carrying a message, origami, white background, digital art"


const ContactPage = () => (
  <Layout navLocation="contact">
    <SEO title="Contact | rohchakr" />
    <StaticImage src={contactImage} alt={contactImageAltText} placeholder="blurred" loading="lazy" />
    <ContactSection headingText={headingText}/>
  </Layout>
)

export default ContactPage

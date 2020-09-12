import React from "react"
import { VscGithub } from "react-icons/vsc"
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    Connect:
    <VscGithub />
    <FaLinkedin />
    <FaInstagram />
    <FaTwitter />
    <FaFacebook />
  </footer>
)
    

export default Footer

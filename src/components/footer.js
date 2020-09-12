import React from "react"
import { VscGithub } from "react-icons/vsc"
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import * as Contacts from "../constants/contact-url"

const Item = ({ icon, text, url }) => (
  <li>
    <a href={url}>
      {icon}{text}
    </a>
  </li>
)

const CopyRightArea = () => (
  <>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </>
)

const ContactArea = () => (
  <>
    <h3>Connect</h3>
    <ul>
      <Item icon={<VscGithub />} text='GitHub' url={Contacts.GITHUB_URL} />
      <Item icon={<FaLinkedin />} text='LinkedIn' url={Contacts.LINKEDIN_URL} />
      <Item icon={<FaInstagram />} text='Instagram' url={Contacts.INSTAGRAM_URL} />
      <Item icon={<FaTwitter />} text='Twitter' url={Contacts.TWITTER_URL} />
      <Item icon={<FaFacebook />} text='Facebook' url={Contacts.FACEBOOK_URL} />
    </ul>
  </>
)

const Footer = () => (
  <footer>
    <CopyRightArea />
    <ContactArea />
  </footer>
)


export default Footer

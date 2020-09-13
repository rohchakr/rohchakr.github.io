import React from "react"
import { VscGithub } from "react-icons/vsc"
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import * as Contacts from "../constants/contact-url"
import footerStyles from "./footer.module.css"

const Item = ({ icon, text, url }) => (
  <li>
    <a href={url} target="_blank">
      {icon}
      <p>{text}</p>
    </a>
  </li>
)

const CopyRightArea = () => (
  <section>
    <h3>rohchakr.github.io</h3>
    <p>
      Copyright © Rohit Chakraborty {new Date().getFullYear()} <br />
      Built with
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      <br />
      Hosted on
      {` `}
      <a href="https://github.com/rohchakr/rohchakr.github.io" target="_blank">GitHub</a>
    </p>
  </section>
)

const ContactArea = () => (
  <section>
    <h3>Connect</h3>
    <ul>
      <Item icon={<VscGithub />} text='GitHub' url={Contacts.GITHUB_URL} />
      <Item icon={<FaLinkedin />} text='LinkedIn' url={Contacts.LINKEDIN_URL} />
      <Item icon={<FaInstagram />} text='Instagram' url={Contacts.INSTAGRAM_URL} />
      <Item icon={<FaTwitter />} text='Twitter' url={Contacts.TWITTER_URL} />
      <Item icon={<FaFacebook />} text='Facebook' url={Contacts.FACEBOOK_URL} />
    </ul>
  </section>
)

const Footer = () => (
  <footer className={footerStyles.footer}>
    <CopyRightArea />
    <ContactArea />
  </footer>
)


export default Footer

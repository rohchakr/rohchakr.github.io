import React from "react"
import { VscGithub } from "react-icons/vsc"
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import { MdOpenInNew } from "react-icons/md"
import * as Contacts from "../constants/contact-url"
import * as footerStyles from "./footer.module.scss"

const Item = ({ icon, text, url }) => (
  <li>
    <a href={url} target="_blank">
      {icon}
      <p>{text}</p>
      <MdOpenInNew />
    </a>
  </li>
)

const CopyRightArea = () => (
  <section className={footerStyles.copyRightSection}>
    <h3>rohchakr.github.io</h3>
    <p>
      © {new Date().getFullYear()}, Rohit Chakraborty
      <br />
      Made with ❤️ using <a href="https://www.gatsbyjs.org" target="_blank">Gatsby <MdOpenInNew /></a>
      <br />
      Hosted on <a href="https://github.com/rohchakr/rohchakr.github.io" target="_blank">GitHub <MdOpenInNew /></a>
    </p>
  </section>
)

const NavItem = ({ text, url }) => (
  <li>
    <a href={url}>
      <p>{text}</p>
    </a>
  </li>
)

const NavigationArea = () => (
  <nav>
    <h3>Explore</h3>
    <ul>
      <NavItem text='About' url='/about' />
      <NavItem text='Career Timeline' url='/career-timeline' />
      <NavItem text='Blog' url='/blog' />
      <NavItem text='Miscellaneous' url='/misc' />
      <NavItem text='Legal' url='/legal' />
    </ul>
  </nav>
)

const ContactArea = () => (
  <section className={footerStyles.contactArea}>
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
  <div className={footerStyles.footerWrapper}>
    <footer className={footerStyles.footer}>
      <CopyRightArea />
      <NavigationArea />
      <ContactArea />
    </footer>
  </div>
)


export default Footer

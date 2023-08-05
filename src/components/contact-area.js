import React from "react"
import { VscGithub } from "react-icons/vsc"
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import { MdOpenInNew } from "react-icons/md"
import * as Contacts from "../constants/contact-url"
import * as footerStyles from "./footer.module.css"

const Item = ({ icon, text, url }) => (
  <li>
    <a href={url} target="_blank">
      {icon}
      <p>{text}</p>
      <MdOpenInNew />
    </a>
  </li>
)

const ContactArea = ({headingText}) => (
  <section className={footerStyles.contactArea}>
    <h3>{headingText}</h3>
    <ul>
      <Item icon={<VscGithub />} text='GitHub' url={Contacts.GITHUB_URL} />
      <Item icon={<FaLinkedin />} text='LinkedIn' url={Contacts.LINKEDIN_URL} />
      <Item icon={<FaInstagram />} text='Instagram' url={Contacts.INSTAGRAM_URL} />
      <Item icon={<FaTwitter />} text='Twitter' url={Contacts.TWITTER_URL} />
      <Item icon={<FaFacebook />} text='Facebook' url={Contacts.FACEBOOK_URL} />
    </ul>
  </section>
)

const ContactSection = ({headingText}) => (
  <footer className={footerStyles.footer}>
    <ContactArea headingText={headingText}/>
  </footer>
)


export default ContactSection
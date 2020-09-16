import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const NavItem = ({ text, url }) => (
  <li>
    <a href={url}>
      <p>{text}</p>
    </a>
  </li>
)

const NavigationArea = () => (
  <nav className={headerStyles.navArea}>
    <ul>
      <NavItem text='About' url='/' />
      <NavItem text='Blog' url='/' />
      <NavItem text='Portfolio' url='/' />
      <NavItem text='Miscellaneous' url='/' />
    </ul>
  </nav>
)

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <NavigationArea />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

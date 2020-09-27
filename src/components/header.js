import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const NavItem = ({ text, url, focus }) => (
  <li className={focus?headerStyles.navItemFocus:headerStyles.navItem}>
    <Link to={url}>
      <p>{text}</p>
    </Link>
  </li>
)

const NavigationArea = ({ location }) => (
  <nav className={headerStyles.navArea}>
    <ul>
      <NavItem text='Home' url='/' focus={location === 'home'}/>
      <NavItem text='About' url='/about' focus={location === 'about'}/>
      <NavItem text='Blog' url='/blog' focus={location === 'blog'}/>
      <NavItem text='Portfolio' url='/portfolio' focus={location === 'portfolio'}/>
      <NavItem text='Miscellaneous' url='/misc' focus={location === 'misc'}/>
    </ul>
  </nav>
)

const Header = ({ siteTitle, navLocation }) => (
  <header className={headerStyles.header}>
    {/* <div
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
    </div> */}
    <NavigationArea location={navLocation}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navLocation: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  navLocation: ``,
}

NavItem.propTypes = {
  focus: PropTypes.bool,
}

NavItem.defaultProps = {
  focus: false,
}

export default Header

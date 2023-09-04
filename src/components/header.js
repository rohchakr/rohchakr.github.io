import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { VscMenu, VscClose } from "react-icons/vsc"
import RohChakrLogo from "./rohchakr-logo"
import * as headerStyles from "./header.module.scss"

// wide and small is based on the size limits in header.module.css
const screen = {
  WIDE: 'wide',
  ALL: 'all',
  SMALL: 'small'
}

const NavItem = ({ text, url, focus }) => {
  if (focus) {
    return (
      <li className={headerStyles.navItemFocus}>
        <p className={headerStyles.menuItemContent}>{text}</p>
      </li>
    )
  }

  return (
    <li className={headerStyles.navItem}>
      <Link to={url}>
        <p className={headerStyles.menuItemContent}>{text}</p>
      </Link>
    </li>
  )
}

const NavigationArea = ({ location, visibleFor }) => {
  let navAreaClassName = headerStyles.navAreaAll

  if (visibleFor === screen.WIDE) {
    navAreaClassName = headerStyles.navAreaWide
  }

  return (
    <nav className={navAreaClassName}>
      <ul>
        <NavItem text='Home' url='/' focus={location === 'home'} />
        <NavItem text='About' url='/about' focus={location === 'about'} />
        <NavItem text='Career Timeline' url='/career-timeline' focus={location === 'career-timeline'} />
        <NavItem text='Blog' url='/blog' focus={location === 'blog'} />
        <NavItem text='Contact' url='/contact' focus={location === 'contact'} />
        {/* <NavItem text='Portfolio' url='/portfolio' focus={location === 'portfolio'}/> */}
        {/* <NavItem text='Miscellaneous' url='/misc' focus={location === 'misc'}/> */}
      </ul>
    </nav>
  )
}

const Header = ({ siteTitle, navLocation }) => {
  const [toggle, switchToggle] = useState(false)

  const toggleMenu = () => {
    switchToggle(!toggle)
  }

  if (toggle === false) {
    // All screens
    return (
      <header className={headerStyles.header}>
        <button className={headerStyles.menuButton} onClick={toggleMenu}>
          <VscMenu />
        </button>
        <div className={headerStyles.menuBarHorizontal}>
          <div className={headerStyles.menuItemsContainer}>
            <div className={headerStyles.logoContainer}>
              <RohChakrLogo />
            </div>
            <div className={headerStyles.navContainer}>
              <NavigationArea location={navLocation} visibleFor={screen.WIDE} />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    // Only small screens if toggle is on
    <header className={headerStyles.header}>
      <button className={headerStyles.menuButton} onClick={toggleMenu}>
        <VscClose />
      </button>
      <div className={headerStyles.menuBar}>
        <div className={headerStyles.menuItemsContainer}>
          <div className={headerStyles.logoContainer}>
            <RohChakrLogo />
          </div>
          <div className={headerStyles.navContainer}>
            <NavigationArea location={navLocation} visibleFor={screen.ALL} />
          </div>
        </div>
      </div>
    </header>
  )
}

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

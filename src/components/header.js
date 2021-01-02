import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { VscMenu, VscClose } from "react-icons/vsc"
import headerStyles from "./header.module.css"

// wide and small is based on the size limits in header.module.css
const screen = {
  WIDE: 'wide',
  ALL: 'all',
  SMALL: 'small'
}
const NavItem = ({ text, url, focus }) => (
  <li className={focus ? headerStyles.navItemFocus : headerStyles.navItem}>
    <Link to={url}>
      <p>{text}</p>
    </Link>
  </li>
)

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
    return (
      <header className={headerStyles.header}>
        <button className={headerStyles.menuButton} onClick={toggleMenu}>
          <VscMenu />
        </button>
        <NavigationArea location={navLocation} visibleFor={screen.WIDE} />
      </header>
    )
  }

  return (
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
      <button className={headerStyles.menuButton} onClick={toggleMenu}>
        <VscClose />
      </button>
      <NavigationArea location={navLocation} visibleFor={screen.ALL} />
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

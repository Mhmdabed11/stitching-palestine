import React from "react"
import "./header.css"
import { Link } from "gatsby"
export default function Header({ transparent, hasBoxShadow }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header
      className={`header ${hasBoxShadow ? "header--box-shadow" : ""}`}
      style={
        transparent
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#ffffff" }
      }
    >
      <nav className="nav">
        <div>
          <Link to="">
            <img
              src={require("../../images/Logo.svg")}
              className="header__logo"
              alt="stitching_palesting_logo"
            />
          </Link>
        </div>
        <div className="burger" onClick={() => setIsOpen(true)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "nav--open" : ""}`}>
          <div onClick={() => setIsOpen(false)} className="nav__close__btn">
            x
          </div>
          <li>
            <Link activeClassName="nav__link--active" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClassName="nav__link--active" to="/spotlight">
              SPOTLIGHT
            </Link>
          </li>
          <li>
            <Link activeClassName="nav__link--active" to="/screenings">
              SCREENINGS
            </Link>
          </li>
          <li>
            <Link activeClassName="nav__link--active" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

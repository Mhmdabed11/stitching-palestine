import React from "react"
import "./header.css"
import { Link } from "gatsby"
export default function Header({ transparent, hasBoxShadow }) {
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
        <div className="nav--left">
          <div>
            <Link activeClassName="nav__link--active" to="/about">
              ABOUT
            </Link>
          </div>
          <div>
            <Link activeClassName="nav__link--active" to="/spotlight">
              SPOTLIGHT
            </Link>
          </div>
        </div>
        <Link to="">
          <img
            src={require("../../images/Logo.svg")}
            className="header__logo"
            alt="stitching_palesting_logo"
          />
        </Link>
        <div className="nav--right">
          <div>
            <Link activeClassName="nav__link--active" to="/screenings">
              SCREENINGS
            </Link>
          </div>
          <div>
            <Link activeClassName="nav__link--active" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

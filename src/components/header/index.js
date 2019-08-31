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
      {/* nav on small devices */}
      <nav className="nav-sm">
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
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close"
              focusable="false"
              style={{
                height: "20px",
                width: "20px",
                display: "block",
                fill: "rgb(255, 255, 255)",
              }}
            >
              <path
                d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                fillRule="evenodd"
              ></path>
            </svg>
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

      {/* nav on big devices */}
      <nav className="nav-bg">
        <div className="nav-bg--left">
          <Link activeClassName="nav__link--active" to="/about">
            ABOUT
          </Link>
          <Link activeClassName="nav__link--active" to="/spotlight">
            SPOTLIGHT
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src={require("../../images/Logo.svg")}
              className="header__logo"
              alt="stitching_palesting_logo"
            />
          </Link>
        </div>
        <div className="nav-bg--right">
          <Link activeClassName="nav__link--active" to="/screening">
            SCREENING
          </Link>
          <Link activeClassName="nav__link--active" to="/contact">
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  )
}

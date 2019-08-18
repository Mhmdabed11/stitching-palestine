import React from "react"
import "./header.css"
export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../../images/Logo.svg")}
        className="header__logo"
        alt="stitching_palesting_logo"
      />
    </header>
  )
}

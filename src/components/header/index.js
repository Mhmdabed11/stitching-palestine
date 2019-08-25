import React from "react"
import "./header.css"
export default function Header({ transparent }) {
  return (
    <header
      className="header"
      style={
        transparent
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#ffffff" }
      }
    >
      <img
        src={require("../../images/Logo.svg")}
        className="header__logo"
        alt="stitching_palesting_logo"
      />
    </header>
  )
}

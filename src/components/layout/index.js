import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import "./layout.css"

const Layout = ({ children, hasMarginTop = true }) => {
  return (
    <>
      <Header />
      <main className={hasMarginTop ? "main--margintop" : ""}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

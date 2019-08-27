import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import "./layout.css"
import Footer from "../footer"

const Layout = ({
  children,
  hasMarginTop = true,
  transparent = false,
  hasBoxShadow = true,
}) => {
  return (
    <>
      <Header transparent={transparent} hasBoxShadow={hasBoxShadow} />
      <main className={hasMarginTop ? "main--margintop main" : "main"}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

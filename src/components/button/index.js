import React from "react"
import "./button.css"
export default function Button({ children, ...rest }) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  )
}

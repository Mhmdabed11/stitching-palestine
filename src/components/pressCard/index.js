import React from "react"
import Img from "gatsby-image"
import "./pressCard.css"
export default function PressCard({ fluid, date, title, body }) {
  return (
    <div className="pressCard__container">
      <div className="pressCard__container__image">
        <Img fluid={fluid} />
      </div>
      <div className="pressCard__container__info__wrapper">
        <div className="pressCard__container__date">{date}</div>
        <div className="pressCard__container__title">{title}</div>
        <div className="pressCard__container__body">{body}</div>
      </div>
    </div>
  )
}

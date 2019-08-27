import React from "react"
import Img from "gatsby-image"
import "./pressCard.css"
export default function PressCard({ fluid, date, title, body }) {
  return (
    <div className="pressCard__container">
      <div className="pressCard__container__image">
        <Img fluid={{ ...fluid, aspectRatio: 4 / 3 }} alt="press" />
      </div>
      <div className="pressCard__container__info__wrapper">
        <div title={date} className="pressCard__container__date">
          {date}
        </div>
        <div title={title} className="pressCard__container__title">
          {title}
        </div>
        <div title={body} className="pressCard__container__body">
          {body}
        </div>
      </div>
    </div>
  )
}

import React from "react"
import Img from "gatsby-image"
import "./pressCard.css"
export default function PressCard({
  fluid,
  date,
  title,
  body,
  isRtl,
  link,
  audioVisual,
}) {
  return (
    <div className="pressCard__container">
      <div className="pressCard__container__info__wrapper">
        <div title={date} className="pressCard__container__date">
          {date}
        </div>
        <div title={title} className="pressCard__container__title">
          {title}
        </div>
        <div
          dir={isRtl ? "rtl" : "ltr"}
          title={body}
          className="pressCard__container__body"
        >
          {body}
        </div>
        <a href={link} target="_blank">
          {audioVisual ? "Watch " : "Read More "} &rarr;
        </a>
      </div>
    </div>
  )
}

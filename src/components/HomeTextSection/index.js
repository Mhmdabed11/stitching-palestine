import React from "react"
import "./HomeTextSection.css"
import Button from "../button"
export default function HomeTextSection({
  imgName,
  title,
  text,
  buttonText,
  onButtonClick,
  backgroundColor,
}) {
  return (
    <section className="section">
      <div
        className="section__container"
        style={{ backgroundColor: backgroundColor }}
      >
        <img
          src={require(`../../images/${imgName}`)}
          className="section__container__image"
        />
        <article className="section__container__article">
          <h3 className="section__container__title bold">{title}</h3>
          <div className="section__container__section__body">{text}</div>
        </article>
        <div>
          <Button onClick={onButtonClick}>{buttonText}</Button>
        </div>
      </div>

      <div></div>
    </section>
  )
}

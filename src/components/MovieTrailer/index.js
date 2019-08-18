import React from "react"
import "./MovieTrailer.css"
import Button from "../button"
export default function MovieTrailer({
  title,
  movieURL,
  buttonText,
  onButtonClick,
  iframeTitle,
}) {
  return (
    <section className="trailer">
      <div className="trailer__container">
        <h3 className className="trailer__container__title bold">
          {title}
        </h3>
        <iframe
          title={iframeTitle}
          className="trailer__video"
          src={movieURL}
          s
        />
        <Button
          onClick={onButtonClick}
          style={{ display: "block", margin: "0 auto" }}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  )
}

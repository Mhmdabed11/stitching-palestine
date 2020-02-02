import React from "react"
import "./MovieTrailer.css"
import Button from "../button"
import { Link } from "gatsby"
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
        <iframe title={iframeTitle} className="trailer__video" src={movieURL} />

        <div className="trailer__container-button-wrapper">
          <Link to="/donate">
            <Button onClick={onButtonClick}>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

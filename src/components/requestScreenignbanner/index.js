import React from "react"
import "./RequestScreeningBanner.css"

export default function RequestScreeningBanner() {
  return (
    <div className="requestScreeningBanner__container">
      <div className="requestScreeningBanner__container__title">
        Host a screening.
      </div>
      <div className="requestScreeningBanner__container__btn__wrapper">
        <a href="#screeningrequest">
          <button className="requestScreeningBanner__container__btn">
            Request a Screening
          </button>
        </a>
      </div>
    </div>
  )
}

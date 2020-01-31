import React from "react"
import "./DonateCard.css"
export default function DonateCard({ title, description }) {
  return (
    <div className="donateCard__container">
      <h2 className="donateCard__container-title">{title}</h2>
      <div className="donateCard__container-description">{description}</div>
    </div>
  )
}

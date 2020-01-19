import React from "react"
import "./DonateCard.css"
export default function DonateCard({ title, description }) {
  return (
    <div className="donateCard__container">
      <div className="donateCard__container-title">{title}</div>
      <div className="donateCard__container-description">{description}</div>
    </div>
  )
}

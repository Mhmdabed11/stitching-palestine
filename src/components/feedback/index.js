import React from "react"
import { feedback } from "../../assets/feedback"
import "./feedback.css"
export default function Feedback() {
  return (
    <div className="feedback__container">
      {feedback.map((feedbackItem, index) => (
        <article key={index} className="feedback">
          <div
            className={`feedback__content ${
              feedbackItem.lang && feedbackItem.lang === "ar"
                ? "feedback__content--align-right"
                : ""
            }`}
          >
            "{feedbackItem.content}"
          </div>
          <div className="feedback__title">- {feedbackItem.title}</div>
          <hr className="feedback__divider" />
        </article>
      ))}
    </div>
  )
}

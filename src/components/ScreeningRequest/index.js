import React from "react"
import "./screeningRequest.css"
import Button from "../button"
export default function ScreeningRequest() {
  return (
    <section id="screeningrequest">
      <div className="screening-request">
        <div className="screening-request__title">Request a Screening</div>
        <div>
          <form
            className="form"
            action="mailto:cmansour@fwdprod.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <input
                type="text"
                name="Name"
                className="form-input"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Phone Number"
                name="Phone Number"
              />
              <input
                type="text"
                name="Location"
                className="form-input"
                placeholder="Location"
              />
            </div>
            <div>
              <textarea
                rows={6}
                className="form-textarea"
                placeholder="Write your request here"
                name="request"
              />
              <div className="buttons__wrapper">
                <Button type="submit">Submit</Button>
                <Button type="reset">Reset</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

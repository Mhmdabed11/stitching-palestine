import React from "react"
import "./stitchBackground.css"
import Button from "../button"
export default function StitchBackground() {
  return (
    <div className="stitchbg__container">
      <div className="stitch__bg__container__title">
        With every stitch <br /> the women are hiding <br /> their stories
      </div>
      <div>
        <Button>Hear their Stories</Button>
      </div>
    </div>
  )
}

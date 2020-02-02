import React from "react"
import "./HomeStats.css"
import Button from "../button"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
export default function HomeStats({ cities, screenings, globalAttendees }) {
  const [visible, setVisible] = React.useState([false, false, false])

  const handleVisibilitySensorChange = (isVisible, index) => {
    if (visible[index] === false) {
      setVisible(visible => Object.assign([...visible], { [index]: isVisible }))
    }
  }
  return (
    <section className="stats">
      {/* <VisibilitySensor> */}

      <div className="stats__stat">
        <VisibilitySensor
          onChange={isVisible => handleVisibilitySensorChange(isVisible, 0)}
        >
          <div className="stats__stat__count">
            <CountUp end={visible[0] ? cities : 0} />
          </div>
        </VisibilitySensor>
        <div className="stats__stat__label">Cities</div>
      </div>
      <div className="stats__stat__seperator"></div>
      <div className="stats__stat">
        <VisibilitySensor
          onChange={isVisible => handleVisibilitySensorChange(isVisible, 1)}
        >
          <div className="stats__stat__count">
            <CountUp end={visible[1] ? screenings : 0} />
          </div>
        </VisibilitySensor>
        <div className="stats__stat__label">Screenings</div>
      </div>
      <div className="stats__stat__seperator"></div>
      <div className="stats__stat">
        <VisibilitySensor
          onChange={isVisible => handleVisibilitySensorChange(isVisible, 2)}
        >
          <div className="stats__stat__count">
            <CountUp end={visible[2] ? globalAttendees : 0} separator="," />
          </div>
        </VisibilitySensor>
        <div className="stats__stat__label">Viewers</div>
      </div>
    </section>
  )
}

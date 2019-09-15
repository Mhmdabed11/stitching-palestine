import React from "react"
import "./LaurelSection.css"

const laurels = [
  {
    source: require("../../images/arab-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/australia-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/boston-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/chicago-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/cinepalestine-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/seoul-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/arab-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/australia-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/boston-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/chicago-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/cinepalestine-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/seoul-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/arab-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/australia-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/boston-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/chicago-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/cinepalestine-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/seoul-laurel.png"),
    name: "arab laurel",
  },

  {
    source: require("../../images/filmlab-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/rotterdam-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/houston-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/delhi-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/toronto-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/srff-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/filmlab-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/rotterdam-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/houston-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/delhi-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/toronto-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/srff-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/filmlab-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/rotterdam-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/houston-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/delhi-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/toronto-laurel.png"),
    name: "arab laurel",
  },
  {
    source: require("../../images/srff-laurel.png"),
    name: "arab laurel",
  },
]
export default function LaurelSection() {
  return (
    <div className="laurels__container">
      <div className="laurels__wrapper">
        {laurels.slice(0, 15).map((laurel, index) => {
          return (
            <div key={index}>
              <img
                style={{ width: "164.473684211px", height: "100px" }}
                src={laurel.source}
                alt="laurel"
              />
            </div>
          )
        })}
      </div>
      <div className="laurels__wrapper__2">
        {laurels.slice(15, 30).map((laurel, index) => {
          return (
            <div key={index}>
              <img
                style={{ width: "164.473684211px", height: "100px" }}
                src={laurel.source}
                alt="laurel"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

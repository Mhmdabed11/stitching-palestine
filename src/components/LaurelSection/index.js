import React from "react"
import "./LaurelSection.css"

const laurels = [
  {
    source: require("../../images/Off select Arab FF San Diego.png"),
    name: "arab SF san diego laurel",
  },
  {
    source: require("../../images/Off select Arab FF SF.png"),
    name: "arab SF san francsico laurel",
  },
  {
    source: require("../../images/Off select Boston PFF.png"),
    name: "boston laurel",
  },
  {
    source: require("../../images/Off select Bristol PFF.png"),
    name: "bristol laurel",
  },
  {
    source: require("../../images/Off select Calgary Arab FF.png"),
    name: "calgary laurel",
  },
  {
    source: require("../../images/Off select Chicago PFF.png"),
    name: "chicago laurel",
  },
  {
    source: require("../../images/Off select CinePalestine Toulouse FF.png"),
    name: "cinepalestine toulouse laurel",
  },
  {
    source: require("../../images/Off select Delhi Int FF.png"),
    name: "delhi laurel",
  },
  {
    source: require("../../images/Off select FilmLab Pal.png"),
    name: "filmlab pal laurel",
  },
  {
    source: require("../../images/Off select Filmmor FF.png"),
    name: "filmlab ff laurel",
  },
  {
    source: require("../../images/Off select Films de Femmes Hammamet.png"),
    name: "films de femmes laurel",
  },
  {
    source: require("../../images/Off Select Houstion PFF.png"),
    name: "houston laurel",
  },
  {
    source: require("../../images/Off select Arab FF San Diego.png"),
    name: "arab SF san diego laurel",
  },
  {
    source: require("../../images/Off select Arab FF SF.png"),
    name: "arab SF san francsico laurel",
  },
  {
    source: require("../../images/Off select Boston PFF.png"),
    name: "boston laurel",
  },
  {
    source: require("../../images/Off select Bristol PFF.png"),
    name: "bristol laurel",
  },
  {
    source: require("../../images/Off select Calgary Arab FF.png"),
    name: "calgary laurel",
  },
  {
    source: require("../../images/Off select Chicago PFF.png"),
    name: "chicago laurel",
  },
  {
    source: require("../../images/Off select CinePalestine Toulouse FF.png"),
    name: "cinepalestine toulouse laurel",
  },
  {
    source: require("../../images/Off select Delhi Int FF.png"),
    name: "delhi laurel",
  },
  {
    source: require("../../images/Off select FilmLab Pal.png"),
    name: "filmlab pal laurel",
  },
  {
    source: require("../../images/Off select Filmmor FF.png"),
    name: "filmlab ff laurel",
  },
  {
    source: require("../../images/Off select Films de Femmes Hammamet.png"),
    name: "films de femmes laurel",
  },
  {
    source: require("../../images/Off Select Houstion PFF.png"),
    name: "houston laurel",
  },
  {
    source: require("../../images/Off select Jerusalem Int FF.png"),
    name: "jerusalem laurel",
  },
  {
    source: require("../../images/Off select Leeds Pal FF.png"),
    name: "leeds pal laurel",
  },
  {
    source: require("../../images/Off select Mediterranean FF Cannes.png"),
    name: "meditarranean laurel",
  },
  {
    source: require("../../images/Off select MENAR FF.png"),
    name: "menar laurel",
  },
  {
    source: require("../../images/Off select New Orleans PFF.png"),
    name: "new orleans laurel",
  },
  {
    source: require("../../images/Off Select PFF Australia.png"),
    name: "australiua laurel",
  },

  {
    source: require("../../images/Off select REEL Palestine FF.png"),
    name: "reel palestine laurel",
  },
  {
    source: require("../../images/Off Select Rotterdam.png"),
    name: "rotterdam laurel",
  },
  {
    source: require("../../images/Off Select Seoul HRFF.png"),
    name: "seoul laurel",
  },
  {
    source: require("../../images/Off Select SRFF 2018.png"),
    name: "srff laurel",
  },
  {
    source: require("../../images/Off Select Toronto PFF.png"),
    name: "toronto laurel",
  },
  {
    source: require("../../images/Off select Jerusalem Int FF.png"),
    name: "jerusalem laurel",
  },
  {
    source: require("../../images/Off select Leeds Pal FF.png"),
    name: "leeds pal laurel",
  },
  {
    source: require("../../images/Off select Mediterranean FF Cannes.png"),
    name: "meditarranean laurel",
  },
  {
    source: require("../../images/Off select MENAR FF.png"),
    name: "menar laurel",
  },
  {
    source: require("../../images/Off select New Orleans PFF.png"),
    name: "new orleans laurel",
  },
  {
    source: require("../../images/Off Select PFF Australia.png"),
    name: "australiua laurel",
  },

  {
    source: require("../../images/Off select REEL Palestine FF.png"),
    name: "reel palestine laurel",
  },
  {
    source: require("../../images/Off Select Rotterdam.png"),
    name: "rotterdam laurel",
  },
  {
    source: require("../../images/Off Select Seoul HRFF.png"),
    name: "seoul laurel",
  },
  {
    source: require("../../images/Off Select SRFF 2018.png"),
    name: "srff laurel",
  },
  {
    source: require("../../images/Off Select Toronto PFF.png"),
    name: "toronto laurel",
  },
]
export default function LaurelSection() {
  return (
    <div className="laurels__container">
      <div className="laurels__wrapper">
        {laurels.slice(0, 24).map((laurel, index) => {
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
        {laurels.slice(24, 48).map((laurel, index) => {
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

import React from "react"
import "./theTech.css"
import { useStaticQuery, graphql } from "gatsby"
export default function TheTech() {
  const data = useStaticQuery(graphql`
    {
      allCreditsJson {
        edges {
          node {
            id
            role
            name
          }
        }
      }
    }
  `)
  return (
    <div className="thetech__container">
      {data.allCreditsJson.edges.map(edge => {
        return (
          <div className="thetech__container__credit" key={edge.node.id}>
            <div className="thetech__container__credit__role">
              {edge.node.role}
            </div>

            <div className="thetech__container__credit__name">
              {edge.node.name}
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

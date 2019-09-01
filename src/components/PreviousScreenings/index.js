import React from "react"
import "./previousScreenings.css"
import { useStaticQuery, graphql } from "gatsby"
export default function PreviousScreenings() {
  const data = useStaticQuery(graphql`
    {
      allPreviousScreeningsJson {
        edges {
          node {
            id
            date
            location
            event
            note
          }
        }
      }
    }
  `)
  return (
    <div className="previous-screenings">
      <div className="previous-screenings__wrapper">
        <div className="previous-screenings__title">Previous Screenings</div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Event / Organization</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {data.allPreviousScreeningsJson.edges.map((edge, index) => (
              <tr key={index}>
                <td>{edge.node.date}</td>
                <td>{edge.node.location}</td>
                <td>{edge.node.event}</td>
                <td>{edge.node.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

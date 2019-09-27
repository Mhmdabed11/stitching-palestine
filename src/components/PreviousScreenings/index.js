import React from "react"
import "./previousScreenings.css"
import { useStaticQuery, graphql } from "gatsby"
export default function PreviousScreenings() {
  const [showMore, setShowMore] = React.useState(false)
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
  const screenings = [...data.allPreviousScreeningsJson.edges]
  const previousScreenings = showMore ? screenings : screenings.splice(0, 9)

  const toggleShowmore = () => {
    setShowMore(showMore => !showMore)
  }
  return (
    <div className="previous-screenings">
      <div className="previous-screenings__wrapper">
        <div className="previous-screenings__title">Previous Screenings</div>
        <table>
          <thead>
            <tr>
              <th className="column__date">Date</th>
              <th className="column__location">Location</th>
              <th className="column__event">Event / Organization</th>
              {/* <th className="column__note">Note</th> */}
            </tr>
          </thead>
          <tbody>
            {previousScreenings.map((edge, index) => (
              <tr key={index}>
                <td>{edge.node.date}</td>
                <td>{edge.node.location}</td>
                <td>{edge.node.event}</td>
                {/* <td>{edge.node.note}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div onClick={toggleShowmore} className="showmore">
        {showMore ? "Show less" : "Show more"}
      </div>
    </div>
  )
}

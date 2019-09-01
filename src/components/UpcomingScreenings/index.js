import React from "react"
import "./upcomingScreenings.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
export default function UpcomingScreenings() {
  const data = useStaticQuery(graphql`
    {
      allScreeningsJson {
        edges {
          node {
            id
            date
            city
            title
            time
            displayPhoto {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="upcoming-screenings">
      <div className="upcoming-screenings__title">Upcoming Screenings</div>
      <div className="upcoming-screenings__cards">
        {data.allScreeningsJson.edges.map((edge, index) => {
          return (
            <div className="upcoming-screenings__screening" key={index}>
              <Img fluid={edge.node.displayPhoto.childImageSharp.fluid} />
              <div className="upcoming-screenings__screening__info">
                <div className="upcoming-screenings__screening__date">
                  {edge.node.date}
                </div>
                <div className="upcoming-screenings__screening__city">
                  {edge.node.city}
                </div>
                <div className="upcoming-screenings__screening__title">
                  {edge.node.title}
                </div>
                <div className="upcoming-screenings__screening__time">
                  {edge.node.time}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

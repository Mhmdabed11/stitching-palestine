import React from "react"
import "./upcomingScreenings.css"
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
                fluid(maxWidth: 1200) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return <div></div>
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./theCrew.css"
export default function TheCrew() {
  const data = useStaticQuery(graphql`
    query {
      allCrewJson {
        edges {
          node {
            id
            name
            jobTitle
            information
            image {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 350) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allCrewJson.edges.map(edge => {
        return (
          <div className="thecrew__container">
            <div className="thecrew__container__image">
              <Img
                style={{ height: "100%" }}
                fluid={edge.node.image.childImageSharp.fluid}
              />
            </div>
            <div className="thecrew__container__text">
              <div className="thecrew__container__title">
                <div>{edge.node.name}</div>
                <div>{edge.node.jobTitle}</div>
                <hr />
              </div>
              <div className="thecrew__container__body">
                {edge.node.information}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

import React from "react"
import "./upcomingScreenings.css"
import Img from "gatsby-image"
import Button from "../button/"
import { graphql, useStaticQuery } from "gatsby"
export default function UpcomingScreenings() {
  const [windowWidth, setWindowWidth] = React.useState(0)
  const [activeIndex, setActiveIndex] = React.useState(0)
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
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  React.useLayoutEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", () =>
          setWindowWidth(window.innerWidth)
        )
      }
    }
  }, [])

  //handle next press
  const handleNext = () => {
    // if (parseInt(activeIndex) < data.allScreeningsJson.edges.length - 1) {
    //   setActiveIndex(activeIndex => activeIndex + 1)
    // }
  }
  const handlePrevious = () => {
    // if (parseInt(activeIndex) > 0) {
    //   setActiveIndex(activeIndex => activeIndex - 1)
    // }
  }
  return (
    <div className="upcoming-screenings">
      <div className="upcoming-screenings__title">Upcoming Screenings</div>
      {windowWidth < 768 ? (
        <div className="upcoming-screenings__cards">
          {data.allScreeningsJson.edges.map((edge, index) => {
            return (
              <div className="upcoming-screenings__screening" key={index}>
                <div style={{ height: "300px" }}>
                  <Img
                    style={{ height: "300px" }}
                    fluid={edge.node.displayPhoto.childImageSharp.fluid}
                  />
                </div>
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
                <Button>Get your ticket</Button>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="screenings-caoursel">
          <div className="screenings-carousel-before" onClick={handlePrevious}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42 2L4 37L42 72" stroke="#DA8476" strokeWidth="5" />
            </svg>
          </div>
          <div className="screenings-carousel--active">
            <div className="screenings-carousel__img">
              <Img
                style={{ height: "240px" }}
                fluid={{
                  ...data.allScreeningsJson.edges[activeIndex].node.displayPhoto
                    .childImageSharp.fluid,
                  aspectRatio: 5 / 3,
                }}
              />
            </div>
            <div className="upcoming-screenings__screening__info">
              <div className="upcoming-screenings__screening__date">
                {data.allScreeningsJson.edges[activeIndex].node.date}
              </div>
              <div className="upcoming-screenings__screening__city">
                {data.allScreeningsJson.edges[activeIndex].node.city}
              </div>
              <div className="upcoming-screenings__screening__title">
                {data.allScreeningsJson.edges[activeIndex].node.title}
              </div>
              <div className="upcoming-screenings__screening__time">
                {data.allScreeningsJson.edges[activeIndex].node.time}
              </div>
              <Button>Get your ticket</Button>
            </div>
          </div>
          <div className="screenings-carousel-after" onClick={handleNext}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 72L40 37L2 2" stroke="#DA8476" strokeWidth="5" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { pressInfo } from "../../assets/pressInfo"
import PressCard from "../pressCard"
import "./Press.css"
export default function Press() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "malakalhusseini-img1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="pressItems__container">
      {pressInfo.map((item, index) => {
        return (
          <div key={index} className="pressItem__container">
            <PressCard
              fluid={data.file.childImageSharp.fluid}
              date={item.date}
              title={item.title}
              body={item.body}
            />
          </div>
        )
      })}
    </div>
  )
}

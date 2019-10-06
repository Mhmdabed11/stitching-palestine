import React from "react"
import "./stitchBackground.css"
import Button from "../button"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
export default function StitchBackground() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "map.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="stitchbg__container">
      <div className="stitch__bg__container__title">
        With every stitch <br /> the women are hiding <br /> their stories
      </div>
      <div>
        <Button>Hear their Stories</Button>
      </div>

      <Image
        fluid={data.file.childImageSharp.fluid}
        className="stitchbg__container__map__bg"
        imgStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  )
}

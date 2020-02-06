import React from "react"
import "./stitchBackground.css"
import Button from "../button"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
export default function StitchBackground() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "map.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="stitchbg__container">
        <div className="stitch__bg__container__title">
          With every stitch <br /> the women are hiding <br /> their stories
        </div>
        <div>
          <Link to="/women">
            <Button>Hear their Stories</Button>
          </Link>

          <Image
            fluid={data.file.childImageSharp.fluid}
            className="stitchbg__container__map__bg"
            imgStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "16px",
          marginTop: -50,
          fontWeight: 500,
        }}
      >
        "Twelve Windows" of Palestine is an embroidery project conceived and
        executed by <br /> INAASH (Association for the Development of
        Palestinian Camps) and funded by TAAWON - Lebanon.
      </div>
    </>
  )
}

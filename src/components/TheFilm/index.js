import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./theFilms.css"
export default function TheFilm() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "malakalhusseini-img2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className="thefilm__container">
      <div className="thefilm__container__image">
        <Img
          style={{ width: "100%" }}
          fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 4 / 3 }}
          alt="thefilm_photo"
        />
      </div>
      <div className="thefilm__container__text">
        <div className="thefilm__container__title">
          <div>The Story behind</div>
          <div>Stitching Palestine</div>
          <hr />
        </div>
        <div className="thefilm__container__body">
          Twelve Palestinian women sit before us and talk of their life before
          the Diaspora, of their <strong>memories</strong>, of their
          <strong> lives</strong> and of their<strong> identity</strong>.
          <br /> Their narratives are connected by the enduring thread of the
          ancient art of embroidery.
          <br /> <br /> Twelve resilient, determined and articulate women from
          disparate walks of life: lawyers, artists, housewives, activists,
          architects, and politicians stitch together the story of their
          homeland, of their dispossession, and of their unwavering
          determination that justice will prevail. <br />
          <br /> Through their stories, the individual weaves into the
          collective, yet remaining distinctly personal. Twelve women, twelve
          life-spans and stories from Palestine; a land whose position was fixed
          on the map of the world, but is now embroidered on its face.
        </div>
      </div>

      <div></div>
    </div>
  )
}

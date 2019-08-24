import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Gallery.css"
export default function Gallery({ thumbnails }) {
  return (
    <div>
      <div className="thumbnails__container">
        {thumbnails.allFile.edges.map(thumbnail => {
          return (
            <div
              key={thumbnail.node.id}
              className="thumbnails__container__thumbnail"
            >
              <Img fluid={thumbnail.node.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const thumbnailImage = graphql`
  fragment thumbnailImage on File {
    childImageSharp {
      fluid(maxWidth: 100, maxHeight: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

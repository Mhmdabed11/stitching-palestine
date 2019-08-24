import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Gallery.css"
import { Row, Col } from "reactstrap"
export default function Gallery({ thumbnails, photos }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  React.useEffect(() => {
    console.log(photos)
  }, [photos])
  return (
    <div>
      <div className="thumbnails__container">
        {thumbnails.edges.map(thumbnail => {
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
      <div className="gallery__container__scrollable">
        {photos[0].nodes.map(node => {
          return (
            <div className="gallery__container__scrollable__image">
              <Img fluid={node.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>

      <div className="gallery__container">
        {photos[0].nodes.map((node, index) => {
          return (
            <div className={`gallery__container__image--${index}`}>
              <Img fluid={node.childImageSharp.fluid} />
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

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Gallery.css"
import { womenInfo } from "../../assets/womenInfo"
export default function Gallery({ thumbnails, photos }) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  //get info of selected woman
  const info = womenInfo[activeIndex]

  //handle thumbnail click
  const handleThumbnailClick = index => {
    setActiveIndex(index)
  }

  return (
    <div>
      {/* Thumbnails */}
      <div className="thumbnails__container">
        {thumbnails.edges.map((thumbnail, index) => {
          return (
            <div
              key={thumbnail.node.id}
              className={`thumbnails__container__thumbnail ${
                index === activeIndex
                  ? "thumbnails__container__thumbnail--active"
                  : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Img fluid={thumbnail.node.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>
      {/* Slider small */}
      <div className="gallery__container--small">
        <div className="gallery__container__scrollable">
          {photos[0].nodes.map((node, index) => {
            return (
              <div
                key={index}
                className="gallery__container__scrollable__image"
              >
                <Img fluid={node.childImageSharp.fluid} />
              </div>
            )
          })}
        </div>
      </div>

      {/* slider large */}
      <div className="gallery__container--large">
        <div className="gallery__container">
          {photos[0].nodes.map((node, index) => {
            return (
              <div
                key={index}
                className={`gallery__container__image--${index}`}
              >
                {index === 0 ? (
                  <Img fluid={node.childImageSharp.fluid} />
                ) : (
                  <Img
                    fluid={{ ...node.childImageSharp.fluid, aspectRatio: 1.54 }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Gallery Info */}
      <div>
        <div className="gallery__container__info__wrapper">
          <div className="gallery__container__name">
            <div className="gallery__container__name--en">{info.nameEn}</div>
            <div className="gallery__container__name--ar">{info.nameAr}</div>
            <hr className="gallery__container__seperator1" />
          </div>
          <div className="gallery__container__caption">
            <div className="gallery__container__caption--en">
              {info.captionEn}
            </div>
            <div className="gallery__container__caption--ar">
              {info.captionAr}
            </div>
          </div>
          <hr className="gallery__container__seperator2" />
        </div>

        <div className="gallery__container__description">
          <ul>
            {info.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
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

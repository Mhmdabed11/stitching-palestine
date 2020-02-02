import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Gallery.css"
import { womenInfo } from "../../assets/womenInfo"
export default function Gallery(props) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const { data } = props
  //get info of selected woman
  const info = data.edges[activeIndex]
  //handle thumbnail click
  const handleThumbnailClick = index => {
    setActiveIndex(index)
  }

  return (
    <div>
      {/* Thumbnails */}
      <div className="thumbnails__container">
        {data.edges.map((thumbnail, index) => {
          return (
            <div
              key={thumbnail.node.id}
              className={`thumbnails__container__thumbnail ${
                index === activeIndex
                  ? "thumbnails__container__thumbnail--active"
                  : "grayscale"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Img fluid={thumbnail.node.thumbnail.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>

      {/* slider large */}
      <div className="gallery__container--large">
        <div className="gallery__container">
          {data.edges[activeIndex].node.images.map((node, index) => {
            return (
              <div
                key={index}
                className={`gallery__container__image--${index}`}
              >
                {index === 0 ? (
                  <Img
                    fluid={{
                      ...node.childImageSharp.fluid,
                      aspectRatio: 1.775,
                    }}
                  />
                ) : (
                  <Img
                    imgStyle={{ objectFit: "unset" }}
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
        <div className="gallery__container__section1__wrapper">
          <div className="gallery__container__name">
            <div className="gallery__container__name--en">
              {info.node.nameEn}
            </div>
            <div className="gallery__container__name--ar">
              {info.node.nameAr}
            </div>
          </div>
          <div className="gallery__container__caption--en">
            {info.node.captionEn}
          </div>
        </div>
        <div className="gallery__container__section2__wrapper">
          <div className="gallery__container__seperator1">
            <hr />
          </div>
          <div dir="rtl" className="gallery__container__caption--ar">
            &quot;{info.node.captionAr}&quot;
          </div>
        </div>
      </div>
      <div className="gallery__container__description">
        <ul>
          {info.node.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
export const galleryImage = graphql`
  fragment galleryImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

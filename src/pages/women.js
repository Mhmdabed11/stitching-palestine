import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "./women.css"
import Gallery from "../components/Gallery/"
const Women = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="women__container">
        <Gallery data={data.allGalleryJson} />
      </div>
    </Layout>
  )
}

export default Women

export const query = graphql`
  {
    allGalleryJson {
      edges {
        node {
          id
          nameEn
          nameAr
          captionEn
          captionAr
          description
          thumbnail {
            ...thumbnailImage
          }
          images {
            ...galleryImage
          }
        }
      }
    }
  }
`

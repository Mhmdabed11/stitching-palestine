import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Gallery from "../components/Gallery"
import Press from "../components/Press"
import Tabs from "../components/tabs"
import "./spotlight.css"
import Feedback from "../components/feedback"
const SpotLight = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)
  const handleOnTabPress = index => {
    setActiveTabIndex(parseInt(index))
  }
  console.log(data.allGalleryJson)
  return (
    <Layout>
      <SEO title="Spotlight" />
      <div className="spotlight__container">
        <Tabs
          onTabPress={handleOnTabPress}
          tabs={["The Women", "The Press", "The Feedback"]}
        />
        <div className="spotlight__section">
          {activeTabIndex === 0 ? (
            <Gallery data={data.allGalleryJson} />
          ) : activeTabIndex === 1 ? (
            <Press />
          ) : (
            <Feedback />
          )}
        </div>
      </div>
    </Layout>
  )
}

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
export default SpotLight

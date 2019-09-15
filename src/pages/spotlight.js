import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Gallery from "../components/Gallery"
import Press from "../components/Press"
import Tabs from "../components/tabs"
import "./spotlight.css"
import Feedback from "../components/feedback"
import { window } from "browser-monads"
const SpotLight = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)
  const handleOnTabPress = index => {
    setActiveTabIndex(parseInt(index))
  }
  React.useEffect(() => {
    if (window) {
      if (
        window.location &&
        window.location.search &&
        window.location.search.split("=") &&
        Array.isArray(window.location.search.split("=")) &&
        window.location.search.split("=").length > 0 &&
        window.location.search.split("=")[1]
      ) {
        let path = window.location.search.split("=")[1]
        if (path.toString() === "women") {
          setActiveTabIndex(0)
        } else if (path.toString() === "press") {
          setActiveTabIndex(1)
        } else if (path.toString() === "feedback") {
          setActiveTabIndex(2)
        }
      }
    }
  }, [window && window.location.search])
  console.log(data.allGalleryJson)
  return (
    <Layout>
      <SEO title="Spotlight" />
      <div className="spotlight__container">
        <Tabs
          onTabPress={handleOnTabPress}
          tabs={["The Women", "The Press", "The Feedback"]}
          icons={[
            require("../images/womenmenulogo.svg"),
            require("../images/presslogo.svg"),
            require("../images/feedbacklogo.svg"),
          ]}
          links={[
            "/spotlight/?active=women",
            "/spotlight/?active=press",
            "/spotlight/?active=feedback",
          ]}
          activeTabIndex={activeTabIndex}
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

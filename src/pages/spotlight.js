import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Press from "../components/Press"
import Tabs from "../components/tabs"
import "./spotlight.css"
import Feedback from "../components/feedback"
import { window } from "browser-monads"
const SpotLight = () => {
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
        if (path.toString() === "press") {
          setActiveTabIndex(0)
        } else if (path.toString() === "feedback") {
          setActiveTabIndex(1)
        }
      }
    }
  }, [window && window.location.search])
  return (
    <Layout>
      <SEO title="Spotlight" />
      <div className="spotlight__container">
        <Tabs
          onTabPress={handleOnTabPress}
          tabs={["The Press", "The Feedback"]}
          icons={[
            require("../images/motif1.png"),
            require("../images/motif2.png"),
          ]}
          links={["/spotlight/?active=press", "/spotlight/?active=feedback"]}
          activeTabIndex={activeTabIndex}
        />
        <div className="spotlight__section">
          {activeTabIndex === 0 ? (
            <Press />
          ) : activeTabIndex === 1 ? (
            <Feedback />
          ) : null}
        </div>
      </div>
    </Layout>
  )
}

export default SpotLight

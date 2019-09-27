import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Tabs from "../components/tabs"
import "./about.css"
import TheFilm from "../components/TheFilm"
import TheCrew from "../components/TheCrew"
import TheTech from "../components/TheTech"
import { window } from "browser-monads"
const About = ({ data }) => {
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
        if (path.toString() === "film") {
          setActiveTabIndex(0)
        } else if (path.toString() === "crew") {
          setActiveTabIndex(1)
        } else if (path.toString() === "tech") {
          setActiveTabIndex(2)
        }
      }
    }
  }, [window && window.location.search])
  return (
    <Layout>
      <SEO title="About" />
      <div className="about__container">
        <Tabs
          onTabPress={handleOnTabPress}
          activeTabIndex={activeTabIndex}
          tabs={["The Film", "The Crew", "The Tech"]}
          icons={[
            require("../images/filmlogo.svg"),
            require("../images/crewlogo.svg"),
            require("../images/cameralogo.svg"),
          ]}
          links={[
            "/about/?active=film",
            "/about/?active=crew",
            "/about/?active=tech",
          ]}
        />
        <div className="about__section">
          {activeTabIndex === 0 ? (
            <TheFilm />
          ) : activeTabIndex === 1 ? (
            <TheCrew />
          ) : (
            <TheTech />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default About

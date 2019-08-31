import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Tabs from "../components/tabs"
import "./about.css"
import TheFilm from "../components/TheFilm"
import TheCrew from "../components/TheCrew"
import TheTech from "../components/TheTech"

const About = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)
  const handleOnTabPress = index => {
    setActiveTabIndex(parseInt(index))
  }
  return (
    <Layout>
      <SEO title="About" />
      <div className="about__container">
        <Tabs
          onTabPress={handleOnTabPress}
          tabs={["The Film", "The Crew", "The Tech"]}
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

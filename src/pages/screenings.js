import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./screening.css"
import UpcomingScreenings from "../components/UpcomingScreenings"
export default function Screening() {
  return (
    <Layout>
      <SEO title="Spotlight" />
      <div className="screening__container">
        <UpcomingScreenings />
      </div>
    </Layout>
  )
}

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./screening.css"
import UpcomingScreenings from "../components/UpcomingScreenings"
import PreviousScreenings from "../components/PreviousScreenings"
import ScreeningRequest from "../components/ScreeningRequest"
export default function Screening() {
  return (
    <Layout>
      <SEO title="Screenings" />
      <div className="screening__container">
        <UpcomingScreenings />
        <PreviousScreenings />
        <ScreeningRequest />
      </div>
    </Layout>
  )
}

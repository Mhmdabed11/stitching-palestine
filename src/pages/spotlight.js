import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/button"
import Gallery from "../components/Gallery"

const SpotLight = () => {
  const data = useStaticQuery(graphql`
    query {
      mainPageStitchDisplay: file(relativePath: { eq: "stitch.png" }) {
        childImageSharp {
          fluid(maxWidth: 4200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.mainPageStitchDisplay.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="Spotlight" />
      <Gallery />
    </Layout>
  )
}

export default SpotLight

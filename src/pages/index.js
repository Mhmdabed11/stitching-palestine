import React from "react"
import "./index.css"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/button"

const IndexPage = () => {
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
      <SEO title="Home" />
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className="home__display"
        backgroundColor={`#fff`}
      >
        <div className="home__display__overlay"></div>
        <div className="home__display__overlay__title">
          <div>"</div> A homeland <br /> the size of the planet <div>"</div>
        </div>
        <Button>Watch Film</Button>
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage

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
      allFile(
        filter: { name: { regex: "/^thumbnail/" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            id
            name
            ...thumbnailImage
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Spotlight" />
      <Gallery thumbnails={data} />
    </Layout>
  )
}

export default SpotLight

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Gallery from "../components/Gallery"

const SpotLight = ({ data }) => {
  return (
    <Layout>
      <SEO title="Spotlight" />
      <Gallery thumbnails={data.thumbnails} photos={[data.photos]} />
    </Layout>
  )
}

export const query = graphql`
  query myQuery {
    thumbnails: allFile(
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

    photos: allFile(filter: { name: { regex: "/^malakalhusseini/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
export default SpotLight

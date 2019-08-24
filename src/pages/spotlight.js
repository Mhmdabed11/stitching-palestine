import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Gallery from "../components/Gallery"
import { Container } from "reactstrap"
import Tabs from "../components/tabs"

const SpotLight = ({ data }) => {
  return (
    <Layout>
      <SEO title="Spotlight" />
      <Container>
        <Tabs tabs={["The Women", "The Press", "The Feedback"]} />
        <Gallery thumbnails={data.thumbnails} photos={[data.photos]} />
      </Container>
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
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
export default SpotLight

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./fwd.css"
const FWD = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fwdlogo-bg.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Fast Forward Production" />
      <div className="fwd__container">
        <div className="image__container">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>

        <div className="address__container">
          <div className="address">Beirut, Lebanon</div>
          <div className="address">Hamra, XYZ Building</div>
          <div className="address">+961 01 111 111</div>
          <p className="address">
            <a href="https://www.forwardfilmproduction.com/" target="__blank">
              www.forwardfilmproduction.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default FWD

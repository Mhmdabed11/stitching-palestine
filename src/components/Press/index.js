import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { pressInfo } from "../../assets/pressInfo"
export default function Press() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "malakalhusseini-img1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      {pressInfo.map(item => {
        return (
          <div style={{ display: "inline-block", width: "50%" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flexBasis: "398px", minWidth: "200px" }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              <div>
                <div>{item.date}</div>
                <div>{item.title}</div>
                <div>{item.body}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

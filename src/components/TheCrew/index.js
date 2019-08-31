import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./theCrew.css"
export default function TheCrew() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "carolmansour-img1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="thecrew__container">
        <div className="thecrew__container__image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="thecrew__container__text">
          <div className="thecrew__container__title">
            <div>Carol Mansour</div>
            <div>Director</div>
            <hr />
          </div>
          <div className="thecrew__container__body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </div>
        </div>
      </div>
      <div className="thecrew__container">
        <div className="thecrew__container__image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="thecrew__container__text">
          <div className="thecrew__container__title">
            <div>Carol Mansour</div>
            <div>Director</div>
            <hr />
          </div>
          <div className="thecrew__container__body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </div>
        </div>
      </div>
      <div className="thecrew__container">
        <div className="thecrew__container__image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="thecrew__container__text">
          <div className="thecrew__container__title">
            <div>Carol Mansour</div>
            <div>Director</div>
            <hr />
          </div>
          <div className="thecrew__container__body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </div>
        </div>
      </div>
      <div className="thecrew__container">
        <div className="thecrew__container__image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="thecrew__container__text">
          <div className="thecrew__container__title">
            <div>Carol Mansour</div>
            <div>Director</div>
            <hr />
          </div>
          <div className="thecrew__container__body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </div>
        </div>
      </div>
      <div className="thecrew__container">
        <div className="thecrew__container__image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="thecrew__container__text">
          <div className="thecrew__container__title">
            <div>Carol Mansour</div>
            <div>Director</div>
            <hr />
          </div>
          <div className="thecrew__container__body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </div>
        </div>
      </div>
    </>
  )
}

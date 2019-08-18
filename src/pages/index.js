import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/button"
import CountUp from "react-countup"

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
        className="home__hero"
        backgroundColor={`#fff`}
      >
        <div className="home__hero__overlay">
          <div className="home__hero__overlay__title">
            <div>"</div> A homeland <br /> the size of the planet <div>"</div>
          </div>
          <Button>Watch Film</Button>
        </div>
      </BackgroundImage>

      {/* Synopsis Section starts */}
      <section className="synopsis">
        <div className="synopsis__container">
          <img
            src={require("../images/needle.svg")}
            className="synopsis__container__image"
          />
          <article className="synopsis__container__article">
            <h3 className="synopsis__container__title bold">
              Twelve Palestinian Women
            </h3>
            <p className="synopsis__container__synopsis__body">
              Twelve Palestinian women sit before us and talk of their life
              before the Diaspora, of their <strong> memories</strong>, of their
              <strong> lives</strong> and of their
              <strong> identity</strong>. Their narratives are connected by the
              enduring thread of the ancient art of embroidery.
            </p>
          </article>
          <div>
            <Button>About the film</Button>
          </div>
        </div>

        <div></div>
      </section>
      {/* Synopsis Section ends */}

      {/* Count Numbers section start */}
      <section className="stats">
        <div className="stats__stat">
          <div className="stats__stat__count">
            <CountUp end={50} />
          </div>
          <div className="stats__stat__label">Cities</div>
        </div>
        <div className="stats__stat__seperator"></div>
        <div className="stats__stat">
          <div className="stats__stat__count">
            <CountUp end={130} />
          </div>
          <div className="stats__stat__label">Screenings</div>
        </div>
        <div className="stats__stat__seperator"></div>
        <div className="stats__stat">
          <div className="stats__stat__count">
            <CountUp end={34200} separator="," />
          </div>
          <div className="stats__stat__label">Global Attendees</div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

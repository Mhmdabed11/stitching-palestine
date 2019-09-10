import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import HomeTextSection from "../components/HomeTextSection"
import HomeStats from "../components/HomeStats"
import MovieTrailer from "../components/MovieTrailer"

const IndexPage = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  // listen to scroll
  React.useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  return (
    <Layout
      hasMarginTop={false}
      hasBoxShadow={scrollPosition > 50}
      transparent={scrollPosition < 50}
    >
      <SEO title="Home" />
      <div className="home__hero">
        <div className="home__hero__overlay">
          <div className="home__hero__overlay__title">
            <div>"</div> A homeland <br /> the size of the planet <div>"</div>
          </div>
          <Button>Watch Film</Button>
        </div>
      </div>

      <HomeTextSection
        imgName="needle.svg"
        title="Twelve Palestinian Women"
        text={
          <div>
            Twelve Palestinian women sit before us and talk of their life before
            the Diaspora, of their <strong> memories</strong>, of their
            <strong> lives</strong> and of their
            <strong> identity</strong>. Their narratives are connected by the
            enduring thread of the ancient art of embroidery.
          </div>
        }
        buttonText="About the Film"
      />

      <HomeStats cities={50} screenings={130} globalAttendees={34200} />

      <MovieTrailer
        title="Watch the Trailer"
        buttonText="Watch the Entire Film"
        movieURL="https://www.youtube.com/embed/OAcS7mGHXiw"
        iframeTitle="Stitching Palestine Movie Trailer"
      />

      <HomeTextSection
        imgName="needle2.svg"
        title="Keep the thread rolling, support the case"
        text="Thousands of women around the world have similar stories, It's in
        our hand to help them change these stories."
        buttonText="Change their Story"
      />
    </Layout>
  )
}

export default IndexPage

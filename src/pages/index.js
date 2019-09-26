import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import HomeTextSection from "../components/HomeTextSection"
import HomeStats from "../components/HomeStats"
import MovieTrailer from "../components/MovieTrailer"
import LaurelSection from "../components/LaurelSection"
import StitchBackground from "../components/stitchBackground"

const IndexPage = () => {
  return (
    <Layout
      hasMarginTop={true}
      transparent={true}
      hasBoxShadow={false}
      coloredLogo={false}
    >
      <SEO title="Home" />
      <div className="home__hero">
        <div className="home__hero__overlay">
          <div className="home__hero__overlay__title">
            <div>
              <span>"</span>
            </div>
            A homeland <br /> the size of the planet
            <div>
              <span>"</span>
            </div>
          </div>
          <Button style={{ fontSize: "20px" }}>Watch the Film</Button>
        </div>
        <div className="laurel__container">
          <img src={require("../images/Off select Boston PFF.png")} />
          <img src={require("../images/Off select Delhi Int FF.png")} />
        </div>
      </div>

      <HomeTextSection
        imgName="needle.svg"
        title="Twelve Palestinian Women"
        backgroundColor={"#fff"}
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
        buttonText="Watch the Film"
        movieURL="https://www.youtube.com/embed/OAcS7mGHXiw"
        iframeTitle="Stitching Palestine Movie Trailer"
      />
      <StitchBackground />
      <div className="thread__bg__container">
        <svg
          className="thread__bg__container__svg"
          width="1902"
          height="34"
          viewBox="0 0 1902 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 31.3779C34.2244 30.6084 54.2436 26.036 81.9395 22.7576C116.451 18.6724 151.923 15.0962 191 13.1309C229.232 11.208 263.633 11.875 301.12 14.04C353.88 17.0869 405.066 20.9793 458.272 23.7804C538.766 28.0182 622.313 30.5529 705.41 31.5077C787.162 32.4471 869.915 33.5779 951.815 32.6604C1018.05 31.9183 1082.04 29.0037 1145.89 25.5499C1176.9 23.8727 1198.68 20.5172 1223.24 16.5887C1244.38 13.208 1254.15 8.20723 1271.58 4.20216C1276.7 3.02598 1284.54 1.30229 1292.77 1.00406C1296.67 0.862989 1297.57 4.44101 1297.99 4.85152C1300.87 7.70262 1305.26 10.7068 1314.94 12.9685C1329.95 16.4746 1351.72 17.3442 1373.47 18.0498C1420.48 19.5752 1464.17 17.3551 1508.12 14.0724C1545.21 11.3026 1576.88 6.50295 1615.23 4.20216C1650.58 2.08094 1686.56 0.890932 1723.47 1.9294C1760.68 2.97622 1798.07 3.73814 1835.47 4.49437C1853.2 4.85294 1870.85 5.21223 1888.61 5.51711C1892.35 5.5814 1898.46 5.44944 1901 5.95543"
            stroke="#DA8476"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <HomeTextSection
          imgName="needle2.svg"
          title="Keep the thread rolling, support the case"
          text="Thousands of women around the world have similar stories, It's in
        our hand to help them change these stories."
          buttonText="Change their Story"
        />
      </div>

      <LaurelSection />
    </Layout>
  )
}

export default IndexPage

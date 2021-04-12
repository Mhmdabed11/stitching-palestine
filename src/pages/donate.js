import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import "./donate.css"
import DonateCard from "../components/DonateCard/DonateCard"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function Donate({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Donate" />
      <Helmet>
        <script>{`
       (function(gi,vi,n,g,l,oo,p){gi[l]=gi[l]||function(){(gi[l].q=gi[l].q||[]).push(arguments);gi.glObjName=l;},oo=vi.createElement(n),p=vi.getElementsByTagName(n)[0];oo.async=1;oo.src=g;oo.dataset.orgId=913;p.parentNode.insertBefore(oo,p);oo.id="gl-donation-popup-script";})(window,document,"script","https://www.givingloop.org/js?"+Array(1).fill(null).map(()=>Math.random().toString(20).substr(2)).join(""),"givingloop");
        `}</script>
      </Helmet>

      <div className="donate__container">
        <h1 className="donate__container-title">
          Watch the Film and Support Us <br /> to keep the thread rolling
        </h1>
        <div className="donate__container-hero">
          {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
          <img src={require("../images/donate.jpg")} alt="" />
        </div>

        <div className="donate__container-cards">
          <DonateCard
            title="Why support us"
            description="We are a filmmaking team with over 20 years of experience in making films that tackle social justice and human rights, issues inherent to the Palestinian cause. With your support, we will be able to continue to bring the Palestinian narrative to the forefront, providing a platform for Palestinian voices to be heard. With a monthly donation or one-off payment, you can become a patron of our work."
          />
          <DonateCard
            title="What we want to do"
            description="To continue to bring Palestinian stories of dispossession, exile, occupation, and discrimination to audiences around the world, and to highlight Palestinian resilience through personal and collective narratives. We want to make these films widely available and easily accessible. By collecting and documenting stories through the creative medium of film, we can make our contribution to the global and growing archive of Palestinian oral history."
          />
          <DonateCard
            title="Beyond donations"
            description={
              <div>
                <div>- Spread the word about this website </div>
                <div>- Spread the word about the film</div>
                <div>- Contact us if you want to organize screenings</div>
              </div>
            }
          />
        </div>

        <div className="donate__incentive">
          <br />
          <br />
          <br />
          <br />
          <h1 className="donate__incentive-subtitle">
            Watch the film & keep the thread rolling
          </h1>

          <div className="donate__incentive-inbox">
            Make either a <b> monthly donation </b> or a <b>one-time payment</b>
            &nbsp;($5 suggested)
          </div>

          <div className="donate__incentive-inbox">
            In both cases you will soon receive the film in your inbox!
          </div>
          {/* <div className="donate__incentive-impact-level ">
            Choose your impact level
          </div> */}
        </div>

        <br />
        <br />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button gl-donate-button="true" gl-style="true">
            Donate
          </button>
        </div>
        <img
          src={require("../images/coloredlogo.jpg")}
          alt="stitching_palesting_logo"
          className="donate__logo"
        />
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     file(relativePath: { eq: "donate.jpg" }) {
//       id
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `

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
       var givingloop_init = window.givingloop_init || [];
        givingloop_init = {ngoID:835,baseURL:"https://www.givingloop.org/",ngoLang:"en",p_id:"all"};
         (function() {var mc = document.createElement("script");
         mc.type = "text/javascript";mc.async = true;mc.id = "";
         mc.src = givingloop_init.baseURL+"assets/js/widget.js";
         var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(mc, s.nextSibling);})();
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
          <h1 className="donate__incentive-title">Watch the Film</h1>
          <div className="donate__incentive-inbox">
            The film will arrive in your inbox shortly
          </div>
          <div className="donate__incentive-forOnly3dollars-container">
            <div className="donate__incentive-forOnly3dollars">For Only 3$</div>
          </div>
          <div className="donate__incentivr-or">or</div>
          <h1 className="donate__incentive-subtitle">
            Watch the film & keep the thread rolling
          </h1>
          {/* <div className="donate__incentive-impact-level ">
            Choose your impact level
          </div> */}
        </div>
        <div className="givingloop_wrapper">
          <div id="givingloop-widget" data-ngo-id="835" data-type="widget" />
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

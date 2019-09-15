import React from "react"
import "./footer.css"
import { Link } from "gatsby"

const FooterItem = ({ title, items = [], links = [] }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const hadndleFooterItemclick = () => {
    setIsExpanded(isExpanded => !isExpanded)
  }
  return (
    <div className="footer__item__wrapper" onClick={hadndleFooterItemclick}>
      <div className="footer_item__title__wrapper">
        <div className="footer__item__title">{title}</div>
        <div className="footer__item__expand">+</div>
      </div>

      <div className={`footer__item ${isExpanded ? "expand" : ""}`}>
        {items.map((item, index) => (
          <div key={index}>
            <Link to={links[index]} className="footer__item__subitem">
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <FooterItem
        title="About"
        items={["Film", "Crew", "Specs"]}
        links={[
          "/about/?active=film",
          "/about/?active=crew",
          "/about/?active=tech",
        ]}
      />
      <FooterItem
        title="Spotlight"
        items={["Press", "Feedback", "Women"]}
        links={[
          "/spotlight/?active=press",
          "/spotlight/?active=feedback",
          "/spotlight/?active=women",
        ]}
      />
      <FooterItem
        title="Screenings"
        items={[
          "Upcoming Screenings",
          "Previous Screenings",
          "Request a Screening",
        ]}
        links={["/screenings", "/screenings", "/screenings"]}
      />
      <FooterItem
        title="Support"
        items={["Watch the Film", "Support the Case"]}
        links={["/screenings", "/screenings"]}
      />

      <div>
        <Link to="/fwd">
          <img
            style={{ width: "80px", height: "40px" }}
            src={require("../../images/fwdlogo.png")}
            alt="forward film production"
          />
        </Link>
      </div>
    </footer>
  )
}

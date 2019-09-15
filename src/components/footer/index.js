import React from "react"
import "./footer.css"
import { Link } from "gatsby"

const FooterItem = ({ title, items = [] }) => {
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
        {items.map(item => (
          <div className="footer__item__subitem">{item}</div>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <FooterItem title="About" items={["Film", "Crew", "Specs"]} />
      <FooterItem title="Spotlight" items={["Press", "Feedback", "Women"]} />
      <FooterItem
        title="Screenings"
        items={[
          "Upcoming Screenings",
          "Previous Screenings",
          "Request a Screening",
        ]}
      />
      <FooterItem
        title="Support"
        items={["Watch the Film", "Support the Case"]}
      />

      <div>
        <img
          style={{ width: "80px", height: "40px" }}
          src={require("../../images/fwdlogo.png")}
          alt="forward film production"
        />
      </div>
    </footer>
  )
}

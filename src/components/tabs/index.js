import React from "react"
import PropTypes from "prop-types"
import "./tabs.css"

export default function Tabs({ tabs, onTabPress }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const handleTabPress = index => {
    if (onTabPress) {
      onTabPress(index)
    }
    setActiveIndex(index)
  }
  return (
    <ul className="tabs">
      {tabs.map((tab, index) => (
        <li
          className={`tabs__tab ${
            index === activeIndex ? "tabs__tab--active" : ""
          }`}
          onClick={() => handleTabPress(index)}
        >
          {tab}
        </li>
      ))}
    </ul>
  )
}
Tabs.prototypes = {
  tabs: PropTypes.array.isRequired,
}

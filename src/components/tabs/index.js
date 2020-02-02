import React from "react"
import PropTypes from "prop-types"
import "./tabs.css"
import { Link } from "gatsby"
export default function Tabs({
  tabs,
  onTabPress,
  activeTabIndex,
  icons = [],
  links = [],
}) {
  const isMounted = React.useRef(false)
  const [activeIndex, setActiveIndex] = React.useState(activeTabIndex)
  const [show, setShow] = React.useState(false)
  const handleTabPress = index => {
    if (onTabPress) {
      onTabPress(index)
    }
    setActiveIndex(index)
  }
  React.useLayoutEffect(() => {
    if (isMounted === false) {
      isMounted.current = true
    }
    if (isMounted) {
      setActiveIndex(activeTabIndex)
      setShow(true)
    }
  }, [activeTabIndex])
  return (
    <>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className="tabs__tab"
            onClick={() => handleTabPress(index)}
          >
            <div className="tabs__tab__item">
              <div
                className={`tabs__tab__icon ${
                  activeIndex === index ? "tabs__tab_item--shown" : ""
                }`}
              >
                <img src={icons[index]} alt="icon" />
              </div>
              <div
                className={` tabs__tab__title ${
                  index === activeIndex ? "tabs__tab--active" : ""
                }`}
              >
                <Link
                  className={`${
                    index === activeIndex ? "tabs__tab--active" : ""
                  }`}
                  to={links[index]}
                >
                  {tab}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
Tabs.prototypes = {
  tabs: PropTypes.array.isRequired,
}

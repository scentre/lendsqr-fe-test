import { useState } from "react";

interface Tab {
  title: string;
  content: JSX.Element; // Content to display for the tab
}

type ActiveTabIndex = number | null;

const Tabs = ({ children }: { children: Tab[] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<ActiveTabIndex>(0);

  const handleClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs-container">
      <ul className="user-info__container__navigation">
        {children.map((tab: Tab, index) => (
          <li
            key={index}
            className={`tab-item ${activeTabIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {children.map((tab: Tab, index) => (
          <div
            key={index}
            className={`tab-content-item ${
              activeTabIndex === index ? "active" : "hidden"
            }`}
          >
            {activeTabIndex === index && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

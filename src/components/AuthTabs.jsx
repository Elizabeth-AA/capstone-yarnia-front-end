import { useState } from "react"

export default function AuthTabs() {
    const tabs = ["Login", "Signup"];
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab tab-lifted ${activeTab === index ? "tab-active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <div className={`card ${activeTab !== 0 ? "hidden" : ""}`}>Content 1</div>
        <div className={`card ${activeTab !== 1 ? "hidden" : ""}`}>Content 2</div>
      </div>
    );
}
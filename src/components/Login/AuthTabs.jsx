import { useState } from "react"
import AuthForm from "./AuthForm";
import RegisterForm from './RegisterForm'

export default function AuthTabs() {
    const tabs = ["Login", "Signup"];
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab tab-lg tab-lifted ${activeTab === index ? "tab-active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <div className={`card ${activeTab !== 0 ? "hidden" : ""}`}><AuthForm /></div>
        <div className={`card ${activeTab !== 1 ? "hidden" : ""}`}><RegisterForm /></div>
      </div>
    );
}
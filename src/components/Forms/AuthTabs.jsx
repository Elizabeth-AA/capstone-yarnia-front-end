import { useState } from "react"
import AuthForm from "@components/Forms/AuthForm";

export default function AuthTabs({ closeModal }) {
    const tabs = ["Login", "Signup"];
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="tabs flex items-start">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab tab-lg tab-lifted font-medium ${activeTab === index ? "tab-active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <div className={`section-content ${activeTab !== 0 ? "hidden" : ""}`}><AuthForm formType="login" closeModal={closeModal} /></div>
        <div className={`section-content ${activeTab !== 1 ? "hidden" : ""}`}><AuthForm formType="signup" closeModal={closeModal} /></div>
      </div>
    );
}
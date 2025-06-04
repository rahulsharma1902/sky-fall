import React from "react";
import styles from "../../pages/home/Disposal/disposal.module.css";
import AgentHandSet from "./components/AgentHandSet";
import AgentPC from "./components/AgentPC";
import AgentSetting from "./components/AgentSetting";
const TabContent = () => {
  return (
    <div className="tab-content pb-5" id="myTabContent">
      <AgentPC />
      <AgentSetting />
      <AgentHandSet />
    </div>
  );
};

export default TabContent;

import React from "react";
import TabContent from "./TabContent";
import TabMenu from "./TabMenu";

function TabContainer() {
  return (
    <div className="p-0">
      <TabMenu />
      <TabContent />
    </div>
  );
}

export default TabContainer;

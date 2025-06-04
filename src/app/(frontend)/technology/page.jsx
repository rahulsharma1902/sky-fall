import React from "react";
import WorldIT from "../components/pages/home/WorldIT";
import WorldModel from "../components/pages/technology/WorldModel";
import TechBg from "../components/pages/technology/TechBg";
import TechDescription from "../components/pages/technology/TechDescription";

export default function Technology() {
  return (
    <section>
      <TechBg />
      <WorldModel />
      <TechDescription />
    </section>
  );
}

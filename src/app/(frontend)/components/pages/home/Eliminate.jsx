import Image from "next/image";
import React from "react";
import FlowChart from "../../common/flowchart/FlowChart";
import styleMobile from "./page.module.css";
const Eliminate = () => {
  return (
    <section
      className={`container-xxl py-md-3 py-lg-5 ${styleMobile.eliminateSection}`}
    >
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center ">
            <h2 className="f-32 f-c-p  ff-j py-md-4 py-3  px-md-0 px-4 customHeadingRightCorner position-relative ">
              Eliminate majority of your IT team with AI agents
              <br />
              Get an army of thousands of AI agents that solve all your IT
              problems.
            </h2>
            <p className="f-20 f-c-s ff-i f-w-400 d-none d-md-block">
              Skyfall&apos;s AI agents complete complex IT tasks in minutes and
              will save your org millions of dollars compared to
              <br />
              error prone human teams. With automated precision and zero
              overhead, our AI agents free IT leaders
              <br />
              to focus on strategic projects that drive real business value.
            </p>
          </div>
        </div>
        <div className="row py-md-3 py-lg-5">
          <FlowChart />
        </div>
      </div>
    </section>
  );
};

export default Eliminate;

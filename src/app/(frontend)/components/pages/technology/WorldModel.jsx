import Image from "next/image";
import React from "react";
import AnimatedHChart from "../../animations/AnimatedHChart";
import AnimatedVChart from "../../animations/AnimatedVChart";
import PathAnimation from "../../animations/AnimatedVDots";

const WorldModel = () => {
  return (
    <section className="container-xxl py-5 worldModelSection">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center customBgWorld ">
            <div className="text-center worldModelContainer">
              <p className="f-20 f-c-p ff-j  f-w-300 f-l-s-1 ">
                Skyfall is disrupting the entire <br />
                AI ecosystem by building the first
              </p>
              <img
                src={"/images/home/worldmodel.svg"}
                className="img-fluid py-2 py-md-4 worldModel"
              />
            </div>
            <p className="f-24 f-c-p ff-j p-md-3 pt-3 py-4 f-w-300 f-l-s text-uppercase ">
              for the enterprise.
            </p>

            <p className="f-20 f-c-s ff-i f-w-400 px-md-5 pb-md-5 pb-4 l-h-1-1">
              The goal of the &apos;Enterprise World Model&apos; is to overcome
              the severe limitations of LLMs{" "}
              <br className=" d-none d-md-block" />
              (Safety, Hallucinations & Expensive training) in order to provide
              enterprises significant
              <br className=" d-none d-md-block" /> value by having a
              comprehensive understanding of the complex interplay between
              <br className=" d-none d-md-block" /> data, people and processes
              within their organization.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center d-flex justify-content-center position-relative ">
            <AnimatedVChart />

            <AnimatedHChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldModel;

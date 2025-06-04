import React from "react";
import Divider from "../../common/divider/Divider";
import NewLetter from "./NewLetter/NewLetter";
import styleMobile from "./page.module.css";
const WorldIT = ({
  home = false,
  title,
  tagline,
  description1,
  description2,
}) => {
  return (
    // itContainerAlignment
    <section
      className={`container-xxl ${home && ""} ${styleMobile.worldFirstSection}`}
    >
      <div className="container py-md-5 pt-5 pb-4">
        <div className="row ">
          <div className="col-12 text-center">
            <h1 className="f-55-25 f-c-p m-0 f-w-400">
              {title} <br />
              {tagline}
            </h1>
            <p className="f-24 f-c-s py-md-2  pb-2 f-w-400 ">
              {description1}
              <br />
              {description2}
            </p>
            <NewLetter />
            {home && <Divider />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldIT;

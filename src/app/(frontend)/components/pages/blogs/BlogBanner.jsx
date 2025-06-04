import React from "react";
import Divider from "../../common/divider/Divider";
import NewLetter from "../home/NewLetter/NewLetter";
import styleMobile from "../home/page.module.css";
const BlogBanner = ({
  home = false,
  title,
  description,
  bannerImage,
}) => {
  return (
    // itContainerAlignment
    <section
      className={` blog-banner ${home && ""} ${styleMobile.worldFirstSection}`}
      style={bannerImage ? {
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } : {}}
    >
      <div className="container py-md-5 pt-5 pb-4">
        <div className="row ">
          <div className=" blog-banner-content text-center">
            <h1 className="blog-heading-banner">
              {title}
            </h1>
            <p className="f-24 f-c-s py-md-2  pb-2 f-w-400 ">
              {description}
            </p>
            <NewLetter />
            {home && <Divider />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;

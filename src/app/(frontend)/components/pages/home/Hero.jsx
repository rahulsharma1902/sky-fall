import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="container-fluid ">
        <div className="row ">
          <Image
            src={"/images/home/HeroImage1.png"}
            className="img-fluid p-0"
            alt="Comparision Graphic"
            width={1510}
            height={550}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

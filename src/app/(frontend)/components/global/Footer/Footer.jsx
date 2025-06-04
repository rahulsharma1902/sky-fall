"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import FooterMenu from "../Menu/FooterMenu";

const Footer = () => {
  return (
    <section className="layoutBg container-fluid-xxl">
      <footer>
        <div className="container-xxl py-4">
          <div className="row align-items-center">
            <div className="col-md-4 col-7 text-md-start text-start">
              <p className={`f-16 f-c-s ff-j`}>
                Skyfall.ai, 2024 All rights reserved
              </p>
            </div>
            <div className="col-md-4 col-1 text-center">
              <FooterMenu />
            </div>
            <div className="col-md-4 col-4 text-md-end text-end">
              {/* <Link href="#" className="p-3">
                <Image
                  src={"/images/icon/youtube.svg"}
                  alt="youtubeIcon"
                  width={32}
                  height={32}
                />
              </Link> */}
              <Link href="https://www.linkedin.com/company/skyfallai" target="_blank" className="p-md-3">
                <Image
                  src={"/images/icon/linkedin.svg"}
                  alt={"linkedinIcon"}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

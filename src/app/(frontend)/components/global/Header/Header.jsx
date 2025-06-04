import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";

const Header = () => {
  return (
    <section className="layoutBg container-fluid ">
      <header>
        <div className="container-xxl py-1 no-padding">
          {/* <nav className="navbar navbar-expand-lg align-items-center "> */}
          <nav className="navbar  ">
            <div className="container no-padding">
              <Link href="/">
                <Image
                  layout="responsive"
                  className="logoMobile"
                  src={"/images/skyfallLogo.svg"}
                  width={200}
                  height={30}
                />
              </Link>
              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              {/* <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              > */}
              <HeaderMenu />
              {/* </div> */}
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;

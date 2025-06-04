import Image from "next/image";
import Link from "next/link";
import React from "react";
import Divider from "../../common/divider/Divider";

const Aboutus = () => {
  return (
    <>
      <Divider />
      <section className="container-xxl">
        <div className="container pt-3">
          <div className="row pt-md-5 pt-4">
            <div className="col-12 text-center px-md-0 px-3">
              <h1 className="f-64 f-c-p ">About us</h1>
              <div className="px-md-4 px-lg-5 py-3 pb-5 pt-3 mx-md-4 mx-lg-5">
                <p className="f-20 l-h-1-1 f-w-400 f-c-s ff-i px-md-4 px-lg-4  mx-md-4 mx-lg-5 text-center l-h-1-1">
                  The Skyfall founding team comprises of Maluuba founders who
                  were previously pioneers in the Deep learning revolution.
                  Maluuba worked with AI pioneers such as Yoshua Bengio and
                  Richard Sutton before it was acquired by
                  <Link href={"#"}> Microsoft</Link> and became Microsoft&apos;s
                  AI research center in Canada.
                  <br />
                  <br />
                </p>
                <p className="f-20 l-h-1-1 f-w-400 f-c-s ff-i px-md-4 px-lg-4  mx-md-4 mx-lg-5 text-center l-h-1-1">
                  Skyfall is an early pioneer in the AI revolution by inventing
                  the first enterprise world model and thereby creating the
                  world&apos;s first autonomous enterprise, starting with a
                  complete reimagination of the IT department. Our team consists
                  of top researchers and scientists who have published papers in
                  the top conferences in the past including NIPS, ICML, ACL,
                  NAACL, et al. For more information, please contact -{" "}
                  <Link href={"mailto:info@skyfall.ai"}>info@skyfall.ai</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row d-none d-md-block">
            <Image
              src={"/images/home/GraphicContainer.svg"}
              width={1220}
              height={360}
              layout="responsive"
              alt="Comparision Graphic"
            />
          </div>
        </div>
      </section>
      <section className="footerImage"></section>
    </>
  );
};

export default Aboutus;

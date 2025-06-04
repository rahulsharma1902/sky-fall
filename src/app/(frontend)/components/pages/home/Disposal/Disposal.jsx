import TabContainer from "@/app/(frontend)/components/common/tabs/TabContainer";
import Image from "next/image";
import React from "react";
import styles from "./disposal.module.css";

const Disposal = () => {
  return (
    <section className={`container-fluid py-md-5  py-3 ${styles.disposalBg}`}>
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center customBg">
            <h2 className="f-40 f-c-p  py-md-5 py-3 ">
              IT agents at your disposal
            </h2>
          </div>
        </div>
      </div>
      <div className="container py-md-5 py-4">
        <div className="row py-md-2">
          <TabContainer />
        </div>
      </div>
    </section>
  );
};

export default Disposal;

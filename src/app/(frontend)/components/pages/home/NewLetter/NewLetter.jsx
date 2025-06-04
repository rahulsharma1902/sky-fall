import Image from "next/image";
import React from "react";
import styles from "./newLetter.module.css";

const NewLetter = () => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col "></div>
        <div className="col-md-6">
          <div className={styles.letterContainer}>
            <button
              className="f-20 f-c-s ff-j px-md-3 px-2 d-flex justify-content-between gap-4 align-items-center outlineBtn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#subscriptionModal"
            >
              Join the waitlist
              <span className="pe-md-0 pe-0">
                <Image
                  src={"/images/icon/arrow_back.svg"}
                  width={15}
                  height={15}
                  alt={"Arrow Back"}
                  layout="responsive"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default NewLetter;

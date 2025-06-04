"use client";
import React from "react";
import MyForm from "../form/MyForm";
import styles from "./modal.module.css";

const Modal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="subscriptionModal"
        tabIndex="-1"
        aria-labelledby="SubscritionModal"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className={`modal-dialog modal-dialog-centered`}>
          <div className={`modal-content ${styles.customModalContent}`}>
            <div className="modal-header p-2 border border-0 d-flex justify-content-end">
              <button
                type="button"
                className={`${styles.btnCloseColor}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src={"/images/icon/close.svg"}
                  alt="Close"
                  className="img-fluid"
                />
              </button>
            </div>
            <div className="modal-body d-flex align-items-center p-0">
              <div className="w-100">
                <MyForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

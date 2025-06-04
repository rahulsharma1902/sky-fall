import Image from "next/image";
import React from "react";

const TabMenu = () => {
  return (
    <ul
      className="nav nav-tabs gap-md-4 gap-3 border-0 pb-3  "
      id="myTab"
      role="tablist"
    >
      <li className="nav-item flex-fill" role="presentation">
        <div
          className="d-flex justify-content-start align-items-center customCard active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home-tab-pane"
          type="button"
          role="tab"
          aria-controls="home-tab-pane"
          aria-selected="true"
        >
          <div className="p-md-3  customCardIconContainer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.18802 0H30.5602C32.3138 0 33.7472 1.43445 33.7472 3.18802V18.0605H0V3.18802C0 1.43445 1.43445 0 3.18696 0H3.18802ZM26.1583 30.3949C26.6015 30.3949 26.9609 30.7543 26.9609 31.1974C26.9609 31.6406 26.6015 32 26.1583 32H7.58997C7.1468 32 6.7874 31.6406 6.7874 31.1974C6.7874 30.7543 7.1468 30.3949 7.58997 30.3949H12.5485V26.6916H21.2008V30.3949H26.1594H26.1583ZM33.7472 19.6656V21.8984C33.7472 23.652 32.3128 25.0854 30.5602 25.0854H3.18802C1.43445 25.0854 0.00106022 23.6509 0.00106022 21.8984V19.6656H33.7483H33.7472Z"
                fill="#A2A2A2"
              />
            </svg>
          </div>
          <div className="p-md-4 py-3 px-2 flex-fill">
            <p className="f-24 ff-j f-c-s text-center">ITAM Agent</p>
          </div>
        </div>
      </li>
      <li className="nav-item flex-fill" role="presentation">
        <div
          className="d-flex justify-content-start align-items-center customCard"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile-tab-pane"
          type="button"
          role="tab"
          aria-controls="profile-tab-pane"
          aria-selected="false"
        >
          <div className="p-md-3 customCardIconContainer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.36559 7.00445L4.10151 8.74456C4.30302 8.94817 4.3471 9.25883 4.20856 9.50863C3.73838 10.3629 3.36056 11.2634 3.0856 12.1996C3.02473 12.4998 2.76025 12.716 2.45378 12.716H0V19.2819H2.45587C2.74134 19.284 2.99113 19.4729 3.07088 19.7458C3.34585 20.6862 3.71946 21.595 4.19175 22.4536C4.35128 22.7097 4.31349 23.0413 4.10149 23.2533L2.36346 24.9913L7.00653 29.6344L8.74456 27.8964C8.94817 27.6949 9.25882 27.6508 9.50862 27.7893C10.3629 28.2595 11.2634 28.6373 12.1996 28.9123C12.4997 28.9732 12.716 29.2377 12.716 29.5441V32H19.2819V29.5441C19.284 29.2587 19.4729 29.0068 19.7458 28.927C20.6862 28.6542 21.595 28.2784 22.4536 27.8083C22.7076 27.6487 23.0392 27.6844 23.2512 27.8964L24.9892 29.6344L29.6323 24.9914L27.8964 23.2533C27.6949 23.0497 27.6508 22.7391 27.7893 22.4893C28.2595 21.635 28.6373 20.7345 28.9123 19.7983C28.9732 19.4981 29.2377 19.2819 29.5441 19.2819H32V12.716H29.5441C29.2587 12.7139 29.0068 12.525 28.927 12.2521C28.6541 11.3117 28.2784 10.4029 27.8083 9.54433C27.6466 9.29034 27.6844 8.95872 27.8964 8.74458L29.6344 7.00656L24.9914 2.36349L23.2533 4.10151C23.0497 4.30302 22.7391 4.3471 22.4893 4.20857C21.635 3.73838 20.7345 3.36057 19.7983 3.0856C19.4981 3.02473 19.2819 2.76025 19.2819 2.45378V0H12.716V2.45587C12.716 2.74134 12.5271 2.99113 12.2521 3.07088C11.7756 3.20941 11.3096 3.37314 10.852 3.56415C10.4049 3.74887 9.96835 3.95878 9.54432 4.19178C9.29034 4.35131 8.95656 4.31563 8.74458 4.10152L7.00656 2.3635L2.36349 7.00657L2.36559 7.00445ZM15.9988 6.91838C13.1756 6.91838 10.514 8.23028 8.79504 10.4721C7.07593 12.7118 6.49661 15.6231 7.22913 18.3497C7.95961 21.0763 9.91591 23.3077 12.525 24.3885C15.1321 25.4695 18.0958 25.2743 20.5413 23.8637C22.9846 22.4511 24.6344 19.9826 25.0039 17.1844C25.3712 14.3843 24.4183 11.5739 22.422 9.57761C20.7197 7.87108 18.4084 6.91419 15.9988 6.91838Z"
                fill="#A2A2A2"
              />
            </svg>
          </div>
          <div className="p-md-4 py-3 px-2 flex-fill">
            <p className="f-24  ff-j f-c-s text-center">ITOM Agent</p>
          </div>
        </div>
      </li>
      <li className="nav-item flex-fill" role="presentation">
        <div
          className="d-flex justify-content-start align-items-center customCard"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact-tab-pane"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false"
        >
          <div className="p-md-3 customCardIconContainer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.40023 12.8006C6.40023 7.49813 10.6974 3.20092 15.9999 3.20092C21.3024 3.20092 25.5996 7.49813 25.5996 12.8006V16.273C23.7352 16.9315 22.4002 18.7105 22.4002 20.7998V27.2002C22.4002 29.8506 24.5482 32 27.2001 32C29.8505 32 31.9999 29.8506 31.9999 27.2002V20.7998C31.9999 18.7104 30.6635 16.9316 28.799 16.273V12.8006C28.799 5.7314 23.0692 0 16 0C8.93075 0 3.20088 5.7314 3.20088 12.8006V16.273C1.33643 16.9315 0 18.7105 0 20.7998V27.2002C0 29.8506 2.14945 32 4.79985 32C7.45174 32 9.59969 29.8506 9.59969 27.2002V20.7998C9.59969 18.7104 8.26472 16.9316 6.40031 16.273L6.40023 12.8006Z"
                fill="#A2A2A2"
              />
            </svg>
          </div>
          <div className="p-md-4 py-3 px-2 flex-fill">
            <p className="f-24 ff-j f-c-s text-center">ITSM Agent</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TabMenu;

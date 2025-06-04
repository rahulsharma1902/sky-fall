"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="navbar-nav ms-5 ms-auto  mb-lg-0 ">
      <li className="nav-item">
        <Link
          href="/product"
          className={`nav-link f-c-s ff-j f-20 f-w-400 px-md-3 px-2 py-md-2 py-1 customLinks ${
            pathname === "/product" ? "active" : ""
          }`}
        >
          Product
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;

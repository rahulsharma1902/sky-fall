"use client";
import React, { useEffect } from "react";
import Modal from "../components/common/modal/Modal";
import Disposal from "../components/pages/home/Disposal/Disposal";
import Eliminate from "../components/pages/home/Eliminate";
import Hero from "../components/pages/home/Hero";
import BannarHome from "../components/pages/home/BannarHome";
import WorldIT from "../components/pages/home/WorldIT";
import Lenis from "lenis";

export default function Product() {
  useEffect(() => {
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <section>
      <BannarHome />
      <WorldIT
        home={true}
        title={`The World's First`}
        tagline={`Automated IT Department`}
        description1={`Reduce IT expenditure by > 80% using`}
        description2={`Enterprise World Models (light years ahead of LLMs)`}
      />
      <Modal />
      <Eliminate />
      <Disposal />
    </section>
  );
}

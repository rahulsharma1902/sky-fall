"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import BlogDetail from "../../components/pages/blogs/BlogDetail";

export default function Blog() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <section>
     
      <BlogDetail />
    </section>
  );
}

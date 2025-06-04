"use client";
import React, { useEffect , useState} from "react";
import Modal from "../components/common/modal/Modal";
import BlogBanner from "../components/pages/blogs/BlogBanner";
import Lenis from "lenis";
import BlogList from "../components/pages/blogs/BlogList";
import { API_URL } from "../../../utils/apiUrl";
import FeaturedBlog from "../components/pages/blogs/FeaturedBlog";
export default function Blog() {
  const [blogSettings, setBlogSettings] = useState(null);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const getBlogSettings = async () => {
      try {
        const res = await fetch(`${API_URL.GET_BLOGS_SETTINGS}`);
        const data = await res.json();
        console.log(data)
        setBlogSettings(data)
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
  };
  useEffect(() => {
    getBlogSettings();
  }, []);
  return (
    <section>
      <BlogBanner
        home={false}
        title={blogSettings?.title ?? 'Enterprise hub' }
        description={blogSettings?.description ?? 'hub for all enterprise news' }
        bannerImage={blogSettings?.bannerImage?.url ?? '/images/blog/banner-img.png'}
      />
      <Modal />
      <FeaturedBlog blogSettings={blogSettings} />  
      <BlogList blogSettings={blogSettings} />
    </section>
  );
}

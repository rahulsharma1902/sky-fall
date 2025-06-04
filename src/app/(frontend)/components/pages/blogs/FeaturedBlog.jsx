import React from "react";
import Divider from "../../common/divider/Divider";
import NewLetter from "../home/NewLetter/NewLetter";
import styleMobile from "../home/page.module.css";
import StaticImage from "../../../assets/images/featured-static.png";
import Image from "next/image";
import BlogFeaturedLoading from "../../SkeletonLoading/Blog/BlogFeaturedLoading"

const FeaturedBlog = ({
  blogSettings
}) => {
  // Example fallback data if blogSettings is missing
  const featured = blogSettings?.fetureBlog || {
    title: "30 best AI prompts for the operational management",
    description:
      "As software development evolves, CDEs will increasingly be crucial in enabling secure, efficient, and collaborative development practices. Organizations that successfully implement these environments will be better pos...",
    date: "2025-06-02T18:30:00.000Z",
    readTime: "10 min read",
    image: {
      url: "/images/blog/featured-static.png",
      alt: "Featured static image",
    },
  };

  return (
    <section className="featured-blog" style={{ background: '#000', color: '#fff', padding: '32px 0' }}>
      <div className="container" style={{ margin: '0 auto', padding: '0 12px' }}>
        <div><h2>Featured Blog</h2></div>
        <div className="row">
          {/* Left: Image */}
          <div className="col-md-7 featured-blog-image">
          <div className="featured-img">
          <img
              src={featured.image?.url || StaticImage }
              alt={featured?.alt || featured?.title}
              style={{ width: '100%', height: '100%',objectFit: 'cover' }}
            />
          </div>
          </div>
          {/* Right: Blog details */}
          <div className="col-md-5">
          <div className="featured-text">
            <div style={{ color: '#aaa', fontSize: 12, marginBottom: 8 }}>
              <p className="featured-date">
                {new Date(featured.publishedDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
                {featured.readTime ? ` • ${featured.readTime} min read` : ''}
              </p>
            </div>
            <h2>
              {featured.title}
            </h2>
            <p style={{ color: '#ccc', fontSize: 15, marginBottom: 20, maxWidth: 420 }}>
              {featured.description}
            </p>
            <button className="more-btn">
              Read more <span style={{ fontSize: 18 }}>
                <Image 
                  src={"/images/icon/arrow_back.svg"}
                  width={5}
                  height={5}
                  alt={"Arrow Back"}
                  layout="responsive"
                />
              </span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;

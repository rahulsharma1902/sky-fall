"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from '../../../../../utils/apiUrl';
import BlogCard from "../../BlogCard/BlogCard";
import "./Blog.css";
import BlogListLoading from "../../SkeletonLoading/Blog/BlogListLoading";
const BlogList = ({blogSettings}) => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = blogSettings?.paginationCount || 6; // Number of blogs per page

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL.GET_ALL_BLOGS}?page=${page}&limit=${limit}`);
        const data = await res.json();
        setBlogs(data.docs);
        setTotalPages(data.totalPages || 1);

      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [page]);

  if (loading) return (
    <BlogListLoading />
  );


  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      // Show all pages if not too many
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        // Show first 3 pages, ..., last
        pages.push(1, 2, 3, '...', totalPages);
      } else if (page >= totalPages - 2) {
        // Show first, ..., last 3 pages
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show first, ..., current-1, current, current+1, ..., last
        pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="container py-5 bg-black text-white min-vh-100 blog-heading">
      <h2 className="mb-4">All Blogs</h2>
      <div className="blog-row">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="d-flex justify-content-center align-items-center blog-pagination">
        <button
          className="btn btn-secondary mx-1"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {getPageNumbers().map((p, idx) =>
          p === '...' ? (
            <span key={idx} className="dots-page">...</span>
          ) : (
            <button
              key={p}
              className={`btn mx-1 ${p === page ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setPage(p)}
              disabled={p === page}
            >
              {p}
            </button>
          )
        )}
        <button
          className="btn btn-secondary mx-1"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );

};

export default BlogList;

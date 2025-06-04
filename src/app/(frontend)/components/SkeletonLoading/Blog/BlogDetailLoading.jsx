"use client";

import Skeleton from "@mui/material/Skeleton";
import React from "react";
import Link from "next/link";

const BlogDetailLoading = () => {
  return (
    <div className="container py-5 bg-black text-white min-h-screen">
      <p className="text-sm text-gray-400 mb-2">
        <Skeleton width={100} height={20} sx={{ bgcolor: "grey.800" }} />
      </p>

      <h1 className="mb-4">
        <Skeleton width="60%" height={40} sx={{ bgcolor: "grey.800" }} />
      </h1>

      <p className="text-sm text-gray-400 mb-4">
        <Skeleton width={150} height={20} sx={{ bgcolor: "grey.800" }} />
      </p>

      <div className="mb-6">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={300}
          sx={{ bgcolor: "grey.800" }}
        />
      </div>

      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            height={20}
            width={`${80 - i * 5}%`}
            sx={{ bgcolor: "grey.800" }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailLoading;

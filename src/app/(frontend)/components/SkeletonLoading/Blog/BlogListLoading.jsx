import Skeleton from "@mui/material/Skeleton";
import React from "react";

const BlogListLoading = ({ limit = 6 }) => (
  <div className="container py-5 bg-black text-white min-vh-100 blog-heading">
    <h2 className="mb-4">All Blogs</h2>
    <div className="blog-row">
      {[...Array(limit)].map((_, idx) => (
        <div key={idx} className="blog-boxs">
          <div className="card bg-dark text-white h-100">
            <Skeleton
              variant="rectangular"
              className="card-img-top rounded-none"
              width="100%"
              height={160}
              sx={{
                bgcolor: "#222",
                "&::after": {
                  background: "linear-gradient(90deg, #222, #444, #222)",
                },
                borderRadius: 0,
                border: '1px solid #585858',
                objectFit: 'cover',
              }}
            />
            <div className="card-body bg-black border-none d-flex flex-column">
              <small className="text-muted">
                <Skeleton
                  variant="text"
                  width={140}
                  height={20}
                  sx={{
                    bgcolor: "#222",
                    "&::after": {
                      background: "linear-gradient(90deg, #222, #444, #222)",
                    },
                    marginBottom: '20px',
                  }}
                />
              </small>
              <Skeleton
                variant="text"
                width={180}
                height={32}
                sx={{
                  bgcolor: "#222",
                  "&::after": {
                    background: "linear-gradient(90deg, #222, #444, #222)",
                  },
                  marginBottom: '20px',
                }}
              />
              <Skeleton
                variant="text"
                width={"90%"}
                height={28}
                sx={{
                  bgcolor: "#222",
                  "&::after": {
                    background: "linear-gradient(90deg, #222, #444, #222)",
                  },
                  marginBottom: '12px',
                }}
              />
              <div className="mt-auto">
                <Skeleton
                  variant="rectangular"
                  width={120}
                  height={38}
                  sx={{
                    bgcolor: "#222",
                    "&::after": {
                      background: "linear-gradient(90deg, #222, #444, #222)",
                    },
                    borderRadius: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogListLoading;
    
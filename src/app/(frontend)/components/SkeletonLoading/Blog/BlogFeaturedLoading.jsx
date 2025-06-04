import Skeleton from "@mui/material/Skeleton";
import React from "react";

const BlogFeaturedLoading = () => (
  <section style={{ background: '#111', color: '#fff', padding: '32px 0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
      <div style={{ marginBottom: 24, fontSize: 22, letterSpacing: 1 }}>
        <Skeleton variant="text" width={180} height={32} sx={{ bgcolor: '#222' }} />
      </div>
      <div style={{ display: 'flex', gap: 32, alignItems: 'stretch', flexWrap: 'wrap' }}>
        {/* Left: Image Skeleton */}
        <div style={{ flex: '1 1 350px', minWidth: 320, maxWidth: 480 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={260}
            sx={{ bgcolor: '#222', borderRadius: 2, border: '1px solid #585858', minHeight: 200 }}
          />
        </div>
        {/* Right: Blog details Skeleton */}
        <div style={{ flex: '1 1 350px', minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ color: '#aaa', fontSize: 12, marginBottom: 8 }}>
            <Skeleton variant="text" width={140} height={20} sx={{ bgcolor: '#222', marginBottom: '8px' }} />
          </div>
          <Skeleton variant="text" width={260} height={36} sx={{ bgcolor: '#222', marginBottom: '12px' }} />
          <Skeleton variant="text" width={"90%"} height={28} sx={{ bgcolor: '#222', marginBottom: '20px' }} />
          <Skeleton variant="rectangular" width={120} height={38} sx={{ bgcolor: '#222', borderRadius: 2 }} />
        </div>
      </div>
    </div>
  </section>
);

export default BlogFeaturedLoading;

// BootstrapClient.tsx (or .js)
"use client";
import React, { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS to enable its features (like modals, tooltips, etc.)
    import("bootstrap/dist/js/bootstrap");
  }, []); // Empty dependency array ensures it runs only once after the first render.

  return null; // Return null because this component doesn't need to render anything visually.
};

export default BootstrapClient; // Default export

// export default BootstrapClient;
// "use client";
// import React, { useEffect } from "react";

// const BootstrapClient = () => {
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap");
//   }, []);
// };

// export default BootstrapClient;

import React from "react";
import Header from "./components/global/Header/Header.jsx";
import Footer from "./components/global/Footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import "./globals.css";
import BootstrapClient from "./components/bootstrapClient/BootstrapClient.js";
// import { ReactLenis } from "@/utils/lenis"; // If you're using Lenis

// Importing the Inter font for Next.js
import { Inter } from "next/font/google";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkyFall",
  description: "World's first Autonomous IT Department",
};

// The RootLayout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <section>{children}</section> {/* Renders your page content */}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}

"use client";

import React from "react";
import HeaderBox from "@/components/ui/headerBox";
import Main from "@/components/ui/main";
import { Box } from "@mui/material";

const headerImages = [
  "/icons/business-2.jpg",
  "/icons/businessmen.jpg",
  "/icons/networking.jpg",
];

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "block",
        minHeight: "100vh", // Ensure the page spans the viewport height
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header Section */}
      <header className="header-box" aria-label="Header Section">
        <HeaderBox
          title="Banking Online, we offer the best tools"
          subtext="We take protecting your finances seriously. All day, every day."
          backgroundImage={headerImages}
        />
      </header>

      {/* Main Content */}
      <main>
        <Main />
      </main>
    </Box>
  );
};

export default Home;

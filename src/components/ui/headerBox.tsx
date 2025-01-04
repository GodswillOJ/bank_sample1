"use client";

import React, { useState, useEffect } from "react";

interface HeaderBoxProps {
  title: string;
  subtext: string;
  backgroundImage: string[]; // Accept an array of images
}

const HeaderBox = ({ title, subtext, backgroundImage }: HeaderBoxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImage.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [backgroundImage.length]);

  return (
    <div
      className="header-box"
      style={{
        backgroundImage: `url(${backgroundImage[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        minHeight: "600px", // Adjust the height as needed
      }}
    >
      <div className="hero_text">
        <h1 className="header-box-title">{title}</h1>
        <p className="header-box-subtext">{subtext}</p>
      </div>
    </div>
  );
};

export default HeaderBox;

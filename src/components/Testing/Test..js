"use client";
import React, { useEffect } from "react";
import SvgComponent from "../HomeSvg";
import { motion } from "framer-motion";

const Test = () => {
  const [showSvg, setShowSvg] = React.useState(false);

  useEffect(() => {
    // Simulating a delay before showing the SVG
    const timeout = setTimeout(() => {
      setShowSvg(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timeout); // Clean up the timeout on unmount or re-render
  }, []);

  return (
    <div>
      <h1>This is the page</h1>
      {showSvg && (
        <div>
          <SvgComponent />
        </div>
      )}
    </div>
  );
};

export default Test;

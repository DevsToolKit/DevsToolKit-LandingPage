"use client";

import React, { useState, useEffect } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { motion } from "framer-motion";

function ToolsPreview() {
  const content = [
    {
      heading: "PixelShift : For serious developers",
      image: "https://signoz.io/img/blog/common/signoz_logs.webp",
    },
    {
      heading: "Log-Express : Your go-to express logger",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      heading: "Contrast : Make sure your users don't go blind",
      image: "https://images.unsplash.com/photo-1617472241266-ff84f4ea167a",
    },
  ];

  const [currentContent, setCurrentContent] = useState(content[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => {
        const currentIndex = content.findIndex(
          (item) => item.heading === prevContent.heading
        );
        const nextIndex = (currentIndex + 1) % content.length;
        return content[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerScroll titleComponent={currentContent.heading}>
      <div className="w-full h-full rounded-xl overflow-hidden">
        <motion.img
          key={currentContent.image} // Adding key to ensure the image is re-rendered on change
          src={currentContent.image}
          alt={currentContent.heading}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} // Smooth fade-in fade-out
        />
      </div>
    </ContainerScroll>
  );
}

export default ToolsPreview;

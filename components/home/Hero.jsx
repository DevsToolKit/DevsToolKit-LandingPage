"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

function HomePage() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        poster="https://framerusercontent.com/images/wZhq88JmCbi32JMmcUcGonp6ms.png"
        loop
        autoPlay
        muted
        preload="auto"
        playsInline
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1", // Ensure the video stays in the background
        }}
      >
        <source
          src="https://framerusercontent.com/assets/UEcewUs0sO1esTagR1XENajYHSY.mp4"
          type="video/mp4; codecs=hvc1.1.6.H120.b0"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/60 to-black/100 z-10"></div>

      <div className="flex justify-center items-center h-screen px-[40px]">
        <div className="flex flex-col items-start justify-center gap-5 h-[600px] max-w-[1400px] overflow-visible p-[40px_0_70px] relative w-full z-20">
          <motion.h1
            className="text-white text-left text-[2.5rem] sm:text-[5rem] md:text-[6.5rem] leading-[0.9em]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The Developer's <br /> Toolkit for Success.
          </motion.h1>

          <motion.p
            className="text-gray-500 text-[0.7rem] sm:text-lg md:text-xl max-w-[700px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Unlock powerful open-source tools that enhance your development
            workflow. From customizable previews to server traffic logs,
            Devstoolkit simplifies your coding process and accelerates
            productivity.
          </motion.p>

          <motion.div
            className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button>Start for free</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

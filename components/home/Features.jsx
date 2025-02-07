"use client";

import React from "react";
import { motion } from "framer-motion";
import GlowingText from "../ui/glowingText";
import PixelShiftFeatures1Card from "../featureCards/PixelShiftFeature1Card";
import TrueToneCard from "../featureCards/TrueToneCard";
import PixelShiftFeature2Card from "../featureCards/PixelShiftFeature2Card";
import OpenSourceCard from "../featureCards/OpenSourceCard";

function Features() {
  return (
    <section className="py-[40px] flex justify-center items-start p-[100px_0px_60px] bg-black h-fit p-[40px]">
      <div className="max-w-[1400px] w-full min-h-[500px] h-auto">
        <div className="flex flex-col justify-center items-center">
          <GlowingText text="Features" />
          <motion.h3
            className="text-white text-[2rem] poppins-regular leading-[1em] tracking-[-.03em] text-center mt-2 max-w-[480px]"
            style={{
              textShadow: "0 4px 18px rgba(255, 255, 255, .40)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            A Complete Toolkit for Modern Developers.
          </motion.h3>

          {/* Scroll-based reveal animation */}
          <motion.p
            className="text-[#999] text-[18px] poppins-regular leading-[1.2em] tracking-[-.03em] text-center mt-4 max-w-[550px]"
            style={{
              textShadow: "0 4px 18px rgba(255, 255, 255, .40)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Devstoolkit provides a suite of open-source tools designed to
            enhance your development workflow. Build better websites, preview
            designs, and manage server logs effortlessly with powerful,
            customizable solutions.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2.5 h-auto max-w-screen-xl overflow-visible p-0 w-full rounded-md relative mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-2.5 h-fit md:h-[560px] overflow-hidden p-0 w-full relative"
          >
            <PixelShiftFeatures1Card />
            <TrueToneCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-2.5 h-fit md:h-[560px] overflow-hidden p-0 w-full relative"
          >
            <PixelShiftFeature2Card />
            <OpenSourceCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;

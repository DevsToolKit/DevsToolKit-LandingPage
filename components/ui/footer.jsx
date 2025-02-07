"use client";

import React from "react";
import { motion } from "framer-motion";

function Footer({ theme }) {
  return (
    <div className="max-w-[1400px] w-full h-fit mx-auto py-10">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`text-center text-[14px] ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Made with 💗 by the Developer for the Developers
      </motion.h3>
    </div>
  );
}

export default Footer;

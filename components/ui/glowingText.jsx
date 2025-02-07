import React from "react";
import { motion } from "framer-motion";

function GlowingText({ text }) {
  return (
    <motion.p
      className="text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(309deg, rgb(166, 221, 255) 2.25225%, rgb(51, 194, 255) 48.0785%, rgb(0, 119, 255) 100%)",
        backgroundSize: "300% 100%",
        backgroundPosition: "0% 50%",
        WebkitBackgroundClip: "text",
        textShadow: "0px 4px 18px rgba(0, 130, 217, .85)",
      }}
      initial={{
        opacity: 0,
        shadow: "0px 4px 18px rgba(0, 130, 217, 0)",
      }}
      whileInView={{
        opacity: 1,
        shadow: "0px 4px 18px rgba(0, 130, 217, .85)",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "90% 50%"],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  );
}

export default GlowingText;

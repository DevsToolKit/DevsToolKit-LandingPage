"use client";

import React from "react";
import { motion } from "framer-motion";
import GlowingText from "../ui/glowingText";
import Link from "next/link";

function ToolsContainer() {
  return (
    <section className="py-[40px] flex justify-center items-start p-[100px_0px_60px] bg-black h-fit p-[30px] md:p-[40px]">
      <div className="max-w-[1400px] w-full min-h-[500px] h-auto">
        <div className="flex flex-col justify-center items-center">
          <GlowingText text="Open-Source Tools" />
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
            Explore powerful open-source tools that you can use and contribute
            to.
          </motion.h3>
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
            All these tools are open-source! Feel free to explore, and
            contribute to the growth of these amazing projects.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center overflow-visible p-0 relative w-full mt-10"
        >
          <FeatureCard
            title={"PixelShift"}
            description={
              "PixelShift allows you to adjust and refine image pixel density for optimal clarity. Contribute to its development and help improve this tool for everyone."
            }
            link={"/pixelshift"}
          />
          <FeatureCard
            title={"TrueTone"}
            description={
              "TrueTone adjusts your display’s colors and brightness based on ambient lighting, providing a more natural and comfortable viewing experience. Join in enhancing its functionality."
            }
            link={"/truetone"}
          />
          <FeatureCard
            title={"Log-Express"}
            description={
              "Log-Express is a logging utility designed for performance and scalability. Help improve its features and contribute to an essential tool for developers."
            }
            link={"/log-express"}
          />
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ title, description, image, link }) => {
  return (
    <Link href={link} passHref>
      <div className="border-b border-l border-r border-t border-solid border-[rgba(255,255,255,.1)] bg-black rounded-xl cursor-pointer flex-none flex-col gap-8 h-[530px] justify-end self-start overflow-hidden p-8 relative w-full">
        <div className="z-[5] relative w-full h-full flex flex-col items-start justify-end gap-[10px]">
          <h4 className="text-white text-[20px] tracking-[-0.3px] leading-[1.4em]">
            {title}
          </h4>
          <p className="text-gray-400 poppins-regular">{description}</p>
          <div>
            <p className="text-white/80 underline-offset-4 hover:text-white hover:underline transition duration-300 ease-in-out poppins-regular">
              Learn more
            </p>
          </div>
        </div>

        <div
          style={{
            WebkitMask:
              "linear-gradient(0deg, rgba(0, 0, 0, 0) 10.41138795045045%, rgba(0, 0, 0, 1) 93.1447072072072%)",
            mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 10.41138795045045%, rgba(0, 0, 0, 1) 93.1447072072072%)",
            flex: "none",
            height: "100%",
            left: "calc(49.78783592644981% - 102% / 2)",
            pointerEvents: "none",
            position: "absolute",
            top: "-1px",
            width: "102%",
            zIndex: 0,
          }}
        >
          <video
            src="https://framerusercontent.com/assets/UEcewUs0sO1esTagR1XENajYHSY.mp4"
            loop
            preload="auto"
            poster="https://framerusercontent.com/images/LuXvygXXo3rbcKhudPLQ3F9zgU.png"
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              display: "block",
              objectFit: "cover",
              backgroundColor: "rgba(0, 0, 0, 0)",
              objectPosition: "50% 50%",
            }}
            autoPlay
          ></video>
        </div>
      </div>
    </Link>
  );
};

export default ToolsContainer;

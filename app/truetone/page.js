"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import "../(styles)/contrastTool.css";
import Website from "@/components/contrastTool/ui/Website";
import { RiDiceFill } from "react-icons/ri";
import { useSearchParams } from "next/navigation"; // Use `useSearchParams` only

function Page() {
  const searchParams = useSearchParams();
  const [colors, setColors] = useState({
    text: "#333333",
    background: "#f4f4f4",
    primary: "#1D6FA5",
    secondary: "#F28C28",
    accent: "#FF6347",
  });
  const debounceTimer = useRef(null); // Use ref to store debounce timer

  // Generate random hex color
  const generateRandomColor = () => {
    const randomHex = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const newColors = {
      text: randomHex(),
      background: randomHex(),
      primary: randomHex(),
      secondary: randomHex(),
      accent: randomHex(),
    };
    setColors(newColors);

    // Update the URL without causing a GET request
    const updatedQuery = new URLSearchParams();
    updatedQuery.set(
      "colors",
      Object.values(newColors)
        .map((color) => color.replace("#", ""))
        .join("-")
    );

    // Directly update the URL without causing Next.js to re-fetch
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${updatedQuery.toString()}`
    );
  };

  // Handle color change from input
  const handleColorChange = (key, value) => {
    setColors((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Clear any existing debounce timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new debounce timer
    debounceTimer.current = setTimeout(() => {
      const updatedQuery = new URLSearchParams(searchParams.toString());
      updatedQuery.set(
        "colors",
        Object.values({ ...colors, [key]: value })
          .map((color) => color.replace("#", ""))
          .join("-")
      ); // Remove # symbol from color

      // Update the URL without causing Next.js to re-fetch
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${updatedQuery.toString()}`
      );
    }, 500); // Delay of 500ms
  };

  // Parse URL parameters and update colors if valid
  useEffect(() => {
    const query = searchParams.get("colors");

    if (query) {
      const colorValues = query.split("-"); // Split by dash
      if (colorValues.length === 5) {
        const newColors = {
          text: `#${colorValues[0] || colors.text}`,
          background: `#${colorValues[1] || colors.background}`,
          primary: `#${colorValues[2] || colors.primary}`,
          secondary: `#${colorValues[3] || colors.secondary}`,
          accent: `#${colorValues[4] || colors.accent}`,
        };

        // Only update the colors if they are different from the current ones
        if (JSON.stringify(newColors) !== JSON.stringify(colors)) {
          setColors(newColors);
        }
      }
    } else {
      // If no query, set default color values in the URL
      const defaultColors = Object.values(colors)
        .map((color) => color.replace("#", ""))
        .join("-");

      // Prevent pushing to the router if the URL is already correct
      if (!searchParams.has("colors")) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}?colors=${defaultColors}`
        );
      }
    }
  }, [searchParams, colors]); // Run effect on mount and whenever searchParams change

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center p-5">
      {/* Website Preview */}
      <div
        className="w-full max-w-[1400px] h-[80vh] rounded-md overflow-auto mx-auto mt-[100px] relative border border-gray-300 shadow-md"
        style={{ backgroundColor: colors.background }}
      >
        <Suspense fallback={<div>Loading Website...</div>}>
          <Website colors={colors} />
        </Suspense>
      </div>

      {/* Color Picker Section */}
      <div className="w-fit max-w-[1400px] h-fit rounded-md mx-auto mt-[20px] p-3 flex justify-start items-center gap-3 flex-wrap border border-gray-300 shadow-md">
        {/* Text Color */}
        <label
          className="relative px-6 py-3 text-white font-semibold text-lg w-fit h-fit rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 shadow-md"
          style={{ backgroundColor: colors.text }}
        >
          Text
          <input
            type="color"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={colors.text}
            onChange={(e) => handleColorChange("text", e.target.value)}
          />
        </label>

        {/* Primary Color */}
        <label
          className="relative px-6 py-3 text-white font-semibold text-lg w-fit h-fit rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 shadow-md"
          style={{ backgroundColor: colors.primary }}
        >
          Primary
          <input
            type="color"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={colors.primary}
            onChange={(e) => handleColorChange("primary", e.target.value)}
          />
        </label>

        {/* Background Color */}
        <label
          className="relative px-6 py-3 text-white font-semibold text-lg w-fit h-fit rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 shadow-md"
          style={{ backgroundColor: colors.background, color: "#000" }}
        >
          Background
          <input
            type="color"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={colors.background}
            onChange={(e) => handleColorChange("background", e.target.value)}
          />
        </label>

        {/* Secondary Color */}
        <label
          className="relative px-6 py-3 text-white font-semibold text-lg w-fit h-fit rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 shadow-md"
          style={{ backgroundColor: colors.secondary }}
        >
          Secondary
          <input
            type="color"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={colors.secondary}
            onChange={(e) => handleColorChange("secondary", e.target.value)}
          />
        </label>

        {/* Accent Color */}
        <label
          className="relative px-6 py-3 text-white font-semibold text-lg w-fit h-fit rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 shadow-md"
          style={{ backgroundColor: colors.accent }}
        >
          Accent
          <input
            type="color"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={colors.accent}
            onChange={(e) => handleColorChange("accent", e.target.value)}
          />
        </label>

        {/* Dice Button */}
        <div
          className="w-[50px] h-full border-[1px] flex justify-center items-center"
          onClick={generateRandomColor}
        >
          <RiDiceFill />
        </div>
      </div>
    </section>
  );
}

export default Page;

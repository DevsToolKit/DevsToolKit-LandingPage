"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import "../(styles)/contrastTool.css";
import Website from "@/components/contrastTool/ui/Website";
import { RiDiceFill } from "react-icons/ri";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const debounceTimer = useRef(null);

  const defaultColors = {
    text: "#333333",
    background: "#f4f4f4",
    primary: "#1D6FA5",
    secondary: "#F28C28",
    accent: "#FF6347",
  };

  const [colors, setColors] = useState(defaultColors);

  // Function to update URL without reloading
  const updateURL = (newColors) => {
    const updatedQuery = new URLSearchParams();
    updatedQuery.set(
      "colors",
      Object.values(newColors)
        .map((color) => color.replace("#", ""))
        .join("-")
    );

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${updatedQuery.toString()}`
    );
  };

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
    updateURL(newColors);
  };

  // Handle color change from input with debounce
  const handleColorChange = (key, value) => {
    const updatedColors = { ...colors, [key]: value };
    setColors(updatedColors);

    // Clear existing debounce timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      updateURL(updatedColors);
    }, 500);
  };

  // Parse URL parameters on mount
  useEffect(() => {
    const query = searchParams.get("colors");

    if (query) {
      const colorValues = query.split("-");
      if (colorValues.length === 5) {
        const newColors = {
          text: `#${colorValues[0] || defaultColors.text}`,
          background: `#${colorValues[1] || defaultColors.background}`,
          primary: `#${colorValues[2] || defaultColors.primary}`,
          secondary: `#${colorValues[3] || defaultColors.secondary}`,
          accent: `#${colorValues[4] || defaultColors.accent}`,
        };

        setColors((prevColors) =>
          JSON.stringify(prevColors) !== JSON.stringify(newColors)
            ? newColors
            : prevColors
        );
      }
    } else {
      updateURL(defaultColors);
    }
  }, [searchParams, defaultColors]);

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center p-5">
      {/* Website Preview */}
      <div
        className="w-full max-w-[1400px] h-[80vh] rounded-md overflow-auto mx-auto mt-[100px] relative border border-gray-300 shadow-md"
        style={{ backgroundColor: colors.background }}
      >
        <Website colors={colors} />
      </div>

      {/* Color Picker Section */}
      <div className="w-fit max-w-[1400px] h-fit rounded-md mx-auto mt-[20px] p-3 flex justify-start items-center gap-3 flex-wrap border border-gray-300 shadow-md">
        {/* Color Pickers */}
        {Object.keys(colors).map((key) => (
          <label
            key={key}
            className="relative px-6 py-3 text-white font-semibold text-lg w-fit h-fit rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 shadow-md"
            style={{
              backgroundColor: colors[key],
              color: key === "background" ? "#000" : "#fff",
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
            <input
              type="color"
              className="absolute inset-0 opacity-0 cursor-pointer"
              value={colors[key]}
              onChange={(e) => handleColorChange(key, e.target.value)}
            />
          </label>
        ))}

        {/* Dice Button */}
        <div
          className="w-[50px] h-full border-[1px] flex justify-center items-center cursor-pointer"
          onClick={generateRandomColor}
        >
          <RiDiceFill />
        </div>
      </div>
    </section>
  );
}

// Wrap the page with Suspense for client-side rendering
export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}

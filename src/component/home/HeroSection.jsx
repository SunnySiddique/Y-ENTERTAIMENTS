import { motion } from "framer-motion";
import Spheres2Background from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js";
import React, { useEffect, useRef, useState } from "react";

export default function InteractiveShapeShow() {
  const [gradientColors, setGradientColors] = useState(["#4a00e0", "#8e2de2"]);
  const canvasRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      bgRef.current = Spheres2Background(canvasRef.current, {
        count: 150,
        colors: [0x4a00e0, 0x8e2de2, 0xff7700],
        minSize: 0.4,
        maxSize: 1.2,
      });
    }

    const handleBodyClick = (ev) => {
      if (ev.target.id !== "colors-btn" && bgRef.current) {
        bgRef.current.togglePause();
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleRandomColors = () => {
    const newColors = [
      Math.floor(Math.random() * 0xffffff),
      Math.floor(Math.random() * 0xffffff),
      Math.floor(Math.random() * 0xffffff),
    ];
    setGradientColors([
      `#${newColors[0].toString(16).padStart(6, "0")}`,
      `#${newColors[1].toString(16).padStart(6, "0")}`,
    ]);
    if (bgRef.current) {
      bgRef.current.spheres.setColors(newColors);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-roboto">
      <AnimatedGradientBackground colors={gradientColors} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 overflow-hidden z-10"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <motion.h1
          className="text-white text-7xl font-bold mb-4 uppercase drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Y-Entertainment
        </motion.h1>
        <motion.h2
          className="text-white text-5xl font-light mb-8 uppercase drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interactive Shape Show
        </motion.h2>
        <motion.p
          className="text-white text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experience the future of entertainment
        </motion.p>
        <button
          id="colors-btn"
          onClick={handleRandomColors}
          className="bg-white/70 hover:bg-white text-gray-800 px-6 py-2 rounded-full text-lg transform hover:scale-110 transition-all"
        >
          Random Colors
        </button>
      </div>
    </div>
  );
}

function AnimatedGradientBackground({ colors }) {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
      }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `radial-gradient(circle, ${colors[1]}55, transparent)`,
        }}
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const transitionVariants = {
  initial: {
    y: "-100%", // Start from the top
    height: "100%",
  },
  animate: {
    y: "0%", // Move to the top (visible state)
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"], // Move out of the screen towards the top
    height: ["0%", "100%"],
  },
};

const PageTransition = () => {
  const { theme } = useTheme();

  // Define different colors for each DaisyUI theme
  const themeToBackground = {
    light: ["#ffffff", "#f0f0f0", "#e0e0e0"],
    dark: ["#333333", "#444444", "#555555"],
    cupcake: ["#f9c8d6", "#f1c7b6", "#f1c4a6"],
    bumblebee: ["#f7e500", "#d5b300", "#a18d00"],
    emerald: ["#00b894", "#019c75", "#017c59"],
    corporate: ["#1e3d58", "#3a5a7c", "#7a8b96"],
    synthwave: ["#ff0066", "#6600ff", "#ff33cc"],
    retro: ["#ff7043", "#d4e157", "#ffd54f"],
    cyberpunk: ["#00ffcc", "#ff00ff", "#ff0055"],
    valentine: ["#ff4f81", "#ff4961", "#e1c2d1"],
    halloween: ["#ff6600", "#cc3300", "#990000"],
    garden: ["#66bb6a", "#81c784", "#a5d6a7"],
    forest: ["#2e7d32", "#388e3c", "#4caf50"],
    aqua: ["#00bcd4", "#4dd0e1", "#80deea"],
    lofi: ["#b3b0a0", "#8d8c7c", "#4e4e42"],
    pastel: ["#f8bbd0", "#d1c4e9", "#ffccbc"],
    fantasy: ["#b39ddb", "#9fa8da", "#8c9eff"],
    wireframe: ["#e0e0e0", "#cfcfcf", "#b0b0b0"],
    black: ["#121212", "#1d1d1d", "#333333"],
    luxury: ["#d4af37", "#cfa400", "#ffcc00"],
    dracula: ["#282a36", "#ff79c6", "#8be9fd"],
    cmyk: ["#00bcd4", "#f44336", "#4caf50"],
    autumn: ["#ff5722", "#ff9800", "#ff7043"],
    business: ["#1976d2", "#0288d1", "#039be5"],
    acid: ["#ff4081", "#c2185b", "#d81b60"],
    lemonade: ["#ffeb3b", "#fff176", "#fdd835"],
    night: ["#212121", "#333333", "#444444"],
    coffee: ["#6d4c41", "#3e2723", "#5d4037"],
    winter: ["#2196f3", "#03a9f4", "#03b7e0"],
    dim: ["#666666", "#888888", "#a0a0a0"],
    nord: ["#2e3440", "#3b4252", "#434c5e"],
    sunset: ["#ff5722", "#ff7043", "#f57c00"],

    // Custom Attractive Themes
    peachy: ["#ffcc99", "#ffb380", "#ff9966"],
    skyline: ["#03a9f4", "#2196f3", "#00bcd4"],
    mintyFresh: ["#98fb98", "#00fa9a", "#3cb371"],
    sunshine: ["#ffeb3b", "#ffd54f", "#ffb300"],
    tropical: ["#00c853", "#009688", "#00796b"],
    mystic: ["#9c27b0", "#ab47bc", "#8e24aa"],
    serene: ["#80deea", "#4dd0e1", "#26c6da"],
    cosmic: ["#8e24aa", "#6a1b9a", "#4a148c"],
    coral: ["#ff7043", "#ff5722", "#ff4081"],
    aquaSplash: ["#00bcd4", "#00acc1", "#0097a7"],
    aurora: ["#ff8a65", "#ff7043", "#ff5722"],
  };

  const backgrounds = themeToBackground[theme] || [
    "#ffffff",
    "#f0f0f0",
    "#e0e0e0",
  ];

  return (
    <>
      <motion.div
        className="fixed top-full right-0 h-screen w-screen z-30"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        style={{ background: backgrounds[0] }}
      ></motion.div>
      <motion.div
        className="fixed top-full right-0 h-screen w-screen z-20"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        style={{ background: backgrounds[1] }}
      ></motion.div>
      <motion.div
        className="fixed top-full right-0 h-screen w-screen z-10"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        style={{ background: backgrounds[2] }}
      ></motion.div>
    </>
  );
};

export default PageTransition;

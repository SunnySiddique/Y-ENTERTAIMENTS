import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "dark",
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate", // Professional and Sleek
      "synthwave", // Retro 80s Neon Vibe
      "retro", // Vintage Feel with Warm Tones
      "cyberpunk", // Futuristic Neon Colors
      "valentine", // Romantic Red and Pink Hues
      "halloween", // Spooky and Fun Colors
      "garden", // Fresh Green with Earthy Tones
      "forest", // Deep Forest Green with Calm Tones
      "aqua", // Fresh and Bright Aqua Blues
      "lofi", // Soft and Chill with Muted Tones
      "pastel", // Light and Soft Pastel Colors
      "fantasy", // Dreamy and Magical Colors
      "wireframe", // Simple, Monochrome Design
      "black", // Dark Background, Light Accents
      "luxury", // Elegant, Gold Accents
      "dracula", // Dark with Bright Accents
      "cmyk", // Colorful with High Contrast
      "autumn", // Earthy Orange and Yellow Tones
      "business", // Professional with Clean Accents
      "acid", // Bold and Bright with High Contrast
      "lemonade", // Warm Yellow with Fresh Vibes
      "night", // Calm and Dark with a Starry Effect
      "coffee", // Rich Brown with Warm Hues
      "winter", // Cool Tones with Blue Hues
      "dim", // Muted Colors for a Subdued Look
      "nord", // Cool Arctic Feel with Calm Blues
      "sunset", // Warm Reds, Oranges, and Yellows

      // Custom Attractive Themes
      "peachy", // Custom Theme: Peachy
      "skyline", // Custom Theme: Skyline
      "minty-fresh", // Custom Theme: Minty Fresh
      "sunshine", // Custom Theme: Sunshine
      "tropical", // Custom Theme: Tropical
      "mystic", // Custom Theme: Mystic
      "serene", // Custom Theme: Serene
      "cosmic", // Custom Theme: Cosmic
      "coral", // Custom Theme: Coral
      "aqua-splash", // Custom Theme: Aqua Splash
      "aurora", // Custom Theme: Aurora
    ],
  },
};

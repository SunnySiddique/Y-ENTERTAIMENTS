import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Background from "../../layout/Background";
import { LetterImages } from "../../utils/LetterImages";
import LetterImage from "./LetterImage";
import ParticleSystem from "./ParticleSystem";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden mb-10"
      style={{
        background: `linear-gradient(135deg, #962C2C 0%, #6E1C1C 50%, #4A0F0F 100%)`,
      }}
    >
      <Background />

      <ParticleSystem mousePosition={mousePosition} />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center"
        >
          {LetterImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="m-1"
            >
              <LetterImage
                src={img}
                index={index}
                sectionRef={sectionRef}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 filter drop-shadow-glow"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center z-10"
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Innovate Create Entertain
          </span>
        </h1>

        <p className="text-xl lg:text-2xl mb-12 max-w-2xl text-white">
          Empowering your entertainment journey with cutting-edge solutions that
          transform ideas into unforgettable experiences
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {[
            "Immersive Virtual Experiences",
            "AI-Powered Content Creation",
            "Interactive Live Streaming",
            "Personalized Entertainment",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
            >
              <Check className="text-white" />
              <span className="text-lg text-white font-semibold">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="relative mt-12">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-white/30 rounded-full filter blur-lg"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-8 py-3 bg-white text-primary font-bold rounded-full shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

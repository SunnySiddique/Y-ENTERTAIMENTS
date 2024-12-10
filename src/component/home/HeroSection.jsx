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
      className="relative  mb-10 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent"
    >
      <Background />

      <ParticleSystem mousePosition={mousePosition} />

      <div className="absolute inset-0 flex items-center justify-center z-40">
        <div className="grid grid-cols-7 gap-4 p-4">
          {LetterImages.map((img, index) => (
            <LetterImage
              key={index}
              src={img}
              index={index}
              sectionRef={sectionRef}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-content">
            Innovate Create Elevate
          </span>
        </h1>

        <p className="text-xl lg:text-2xl mb-12 max-w-2xl text-white">
          Empowering your digital journey with cutting-edge solutions that
          transform ideas into reality
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {[
            "AI-Powered Applications",
            "Immersive 3D Experiences",
            "Scalable Cloud Solutions",
            "Responsive Web Design",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4 bg-white/10 rounded-lg p-4"
            >
              <Check />
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
            className="absolute inset-0 bg-accent rounded-full filter blur-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

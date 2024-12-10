import { motion } from "framer-motion";
import aboutImage from "/images/aboutImage.jpg";

const AboutSection = () => {
  return (
    <section
      className="relative h-[70vh] bg-primary overflow-hidden  text-center"
      style={{
        backgroundImage: `url(${aboutImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground text-5xl md:text-7xl font-bold mb-3 uppercase"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl max-w-2xl"
        >
          Shaping the future through innovation and creativity
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;

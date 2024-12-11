import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const LetterImage = ({ src, index, sectionRef }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        delay: index * 0.2,
      },
    });
  }, [controls, index]);

  return (
    <motion.div
      className="relative  z-20 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-grab"
      animate={controls}
      whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
      drag
      dragConstraints={sectionRef}
      dragElastic={0.1}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-contain pointer-events-none drop-shadow-lg"
      />
      <motion.div
        className="absolute inset-0  bg-gradient-to-br from-white/20 to-white/5 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default LetterImage;

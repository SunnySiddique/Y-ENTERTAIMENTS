import { motion } from "framer-motion";

const IconContainer = ({ icon: Icon }) => {
  return (
    <motion.div
      className="relative w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-white"
      style={{
        perspective: 1200,
      }}
      initial={{
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
      }}
      animate={{
        rotateX: [0, 10, -10, 0],
        rotateY: [0, -10, 10, 0],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
      whileHover={{
        scale: 1.2,
        rotateX: 25,
        rotateY: -25,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    >
      <motion.div
        className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary-content"
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.3, // Subtle scaling effect on hover
          rotate: [0, 360], // Full rotation for a dynamic effect
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default IconContainer;

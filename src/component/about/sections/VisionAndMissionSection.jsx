import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const VisionAndMissionSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              VISION
            </h2>
            <p className=" italic">
              To enjoy the moments, refine the purpose, create a contemporary
              design, and get the Tower of Babylon completed.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
          >
            <h2 className="text-primary-foreground text-3xl font-bold mb-4 ">
              MISSION
            </h2>
            <p className=" italic">
              To use authenticity as a driving force for disrupting the status
              quo and designing experiences that leave timeless impressions.
              Catalyzing technology, creativity, and entrepreneurship through
              collaboration to empower and lead the way into a friendlier future
              for humankind.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAndMissionSection;

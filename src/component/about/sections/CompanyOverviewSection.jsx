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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CompanyOverviewSection = () => {
  return (
    <motion.section
      whileHover={{ y: -5 }}
      className={` relative z-10 max-w-6xl mx-auto py-20 px-4  shadow-lg bg-primary/10 rounded-sm`}
    >
      <div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-primary-foreground text-4xl font-bold mb-8 "
          >
            COMPANY OVERVIEW
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg  leading-relaxed max-w-3xl mx-auto "
          >
            Operationally, we are an entrepreneurial R&D deep tech venture,
            evolving as a lean, fully remote, international, and ethical
            business. Thriving on creativity, we iterated into our current state
            from a boutique marketing and PR company, incorporated in London in
            2013. Strategically, our focus is on facilitating digital
            transformation of creative and luxury industries, while our R&D
            activities concentrate on building Web 3.0 with a focus on
            artificial intelligence, alongside quantum computing and blockchain
            technology, particularly asset tokenization.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyOverviewSection;

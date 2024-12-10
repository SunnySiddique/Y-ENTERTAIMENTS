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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ValuesSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary-foreground"
        >
          OUR VALUES
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            "CURIOSITY",
            "TRUTH",
            "KINDNESS",
            "RESPECT",
            "OPTIMISM",
            "SUSTAINABILITY",
          ].map((value, index) => (
            <motion.div
              key={value}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-6 bg-white bg-opacity-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">
                {value}
              </h3>
              <p>
                {index === 0 &&
                  "Our innate curiosity drives us to continuously seek out new knowledge, perspectives, and experiences."}
                {index === 1 &&
                  "We believe in honesty, accuracy, and transparency in all that we do."}
                {index === 2 &&
                  "Kindness is at the heart of our culture, and we believe in treating others with empathy, compassion, and generosity."}
                {index === 3 &&
                  "We value diversity and inclusivity, and strive to treat all individuals with respect."}
                {index === 4 &&
                  "Our optimistic outlook helps us approach challenges with a growth mindset and positive attitude."}
                {index === 5 &&
                  "We believe in reducing our environmental impact and being responsible stewards of the planet."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;

import { motion } from "framer-motion";
import { BarChart, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "We deliver top-notch solutions that exceed expectations.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Approach",
    description:
      "Our strategies are backed by thorough research and analytics.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our professionals bring years of industry experience to every project.",
  },
];

const HomeFeaturesSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-primary-foreground text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group`}
            >
              <div className="mb-4 relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <motion.div
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }} // Scale on hover
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-8 h-8" />
                  </motion.div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
                {feature.title}
              </h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSection;

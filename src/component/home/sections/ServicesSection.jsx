import { motion } from "framer-motion";
import { ArrowRight, BarChart, CheckCircle, Users, Zap } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-primary-foreground text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Digital Marketing",
              description:
                "Boost your online presence and reach your target audience effectively.",
            },
            {
              icon: BarChart,
              title: "Web Development",
              description:
                "Custom websites and web applications tailored to your business needs.",
            },
            {
              icon: Users,
              title: "Data Analytics",
              description:
                "Gain valuable insights from your data to make informed business decisions.",
            },
            {
              icon: CheckCircle,
              title: "Cloud Solutions",
              description:
                "Scalable and secure cloud infrastructure to power your operations.",
            },
            {
              icon: ArrowRight,
              title: "Cybersecurity",
              description:
                "Protect your digital assets with our comprehensive security solutions.",
            },
            {
              icon: Zap,
              title: "AI & Machine Learning",
              description:
                "Leverage the power of AI to automate and optimize your processes.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-primary/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="mb-4 relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8  group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <a
                href="#"
                className="text-primary-foreground hover:text-primary-foreground group-hover:font-semibold transition-all duration-300 flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

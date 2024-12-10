import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Send } from "lucide-react";
import EarthCanvas from "../../../canvas/EarthCanvas";
import IconContainer from "./IconContainer";

const contactData = [
  {
    title: "Service Inquiries",
    description: "Get help with our marketing services and solutions",
    icon: Send,
  },
  {
    title: "Career Opportunities",
    description: "Join our dynamic and inclusive workplace",
    icon: ArrowRight,
  },
  {
    title: "Partnerships",
    description: "Explore collaboration and growth opportunities",
    icon: Mail,
  },
  {
    title: "General Questions",
    description: "We're here to help with any other inquiries",
    icon: Phone,
  },
];

const ContactSection = () => {
  return (
    <>
      <div className="px-4 py-12 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Whether you have questions, need assistance, or want to explore
            partnerships, we&apos;re here to help shape your vision into
            reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scrollbar-hide ">
          {contactData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              viewport={{ once: true }}
              className={`bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <IconContainer key={index} icon={item.icon} />
              <h2 className="text-xl font-semibold mb-2 text-primary-foreground">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-between md:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`bg-white bg-opacity-10 p-6 rounded-lg shadow-md`}
          >
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="mb-6">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-3 py-2 rounded-md focus:outline-none ring-2 ring-second"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 rounded-md focus:outline-none ring-2 ring-second"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-md focus:outline-none ring-2 ring-second"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full px-3 py-2 rounded-md focus:outline-none ring-2 ring-second"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`bg-white/10 py-2 px-4 rounded-md hover:bg-primary transition-colors duration-300 flex items-center justify-center`}
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>
          <EarthCanvas />
        </div>
      </div>
    </>
  );
};

export default ContactSection;

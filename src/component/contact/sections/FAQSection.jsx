import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of entertainment services including event planning, talent management, and media production.",
  },
  {
    question: "How can I book an artist for my event?",
    answer:
      "You can reach out to us through our contact form or email us directly with details about your event and the artist you're interested in booking.",
  },
  {
    question: "Do you offer internship opportunities?",
    answer:
      "Yes, we offer internship opportunities in various departments. Please check our Careers section for current openings.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "While we're based in Alaska, we offer our services nationwide and can accommodate international requests as well.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative z-10 container mx-auto p-6 rounded-lg shadow-md "
    >
      <h2 className="text-2xl font-bold mb-6 ">Frequently Asked Questions</h2>{" "}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-semibold ">{item.question}</span>{" "}
              <ChevronDown
                className={`w-5 h-5  transform transition-transform duration-200 ${
                  openFaq === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 "
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQSection;

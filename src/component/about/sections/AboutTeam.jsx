import { motion } from "framer-motion";

// team members data
const teamMembers = [
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/images/aboutImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
];

const AboutTeam = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        <motion.div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-foreground text-3xl font-bold mb-2 uppercase"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Lorem ipsum
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                rotateX: index === 2 ? 20 : -10,
                rotateY: index === 2 ? 20 : -10,
                scale: 1.1, // Slightly scale up the element on hover
              }}
              className={`text-center bg-primary bg-opacity-10 rounded-lg shadow group transition-transform duration-300`}
              style={{
                transformStyle: "preserve-3d", // Enable 3D transformations
                perspective: "1000px", // Create the 3D space
              }}
            >
              {/* Image Wrapper */}
              <div className="relative rounded-t-lg overflow-hidden">
                {/* Card Image */}
                <img
                  className="w-full object-cover"
                  src={member.image}
                  alt={`${member.name}`}
                  width={300}
                  height={300}
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-primary-foreground">
                  {member.name}
                </h3>
                <p className="mb-3">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;

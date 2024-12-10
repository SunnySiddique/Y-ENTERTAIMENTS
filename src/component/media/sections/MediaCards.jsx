import { motion } from "framer-motion";
import { BadgeCheck, Heart } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Tempor nostru",
    author: {
      name: "Miller",
      image: "/singleImage.jpg",
      verified: true,
    },
    image: "/singleImage.jpg",
    likes: 52,
    description:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
  },
  {
    id: 2,
    title: "Adipisicing e",
    author: {
      name: "Rutledge",
      image: "/singleImage.jpg",
      verified: true,
    },
    image: "/singleImage.jpg",
    likes: 245,
    description:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
  },
  {
    id: 3,
    title: "Labore excep",
    author: {
      name: "Logan",
      image: "/singleImage.jpg",
      verified: true,
    },
    image: "/singleImage.jpg",
    likes: 126,
    description:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
  },
  {
    id: 4,
    title: "Excepteur occ",
    author: {
      name: "Riley",
      image: "/singleImage.jpg",
      verified: false,
    },
    image: "/singleImage.jpg",
    likes: 87,
    description:
      "Incididunt minim nostrud mollit consectetur sint Lorem aute irure.",
  },
  {
    id: 5,
    title: "Aute irure do",
    author: {
      name: "Morgan",
      image: "/singleImage.jpg",
      verified: true,
    },
    image: "/singleImage.jpg",
    likes: 198,
    description:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
  },
  {
    id: 6,
    title: "Cupidatat no",
    author: {
      name: "Rocha",
      image: "/singleImage.jpg",
      verified: false,
    },
    image: "/singleImage.jpg",
    likes: 12,
    description:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
  },
  {
    id: 7,
    title: "Digital Art Creation",
    author: {
      name: "Sarah Chen",
      image: "/singleImage.jpg",
      verified: true,
    },
    image: "/singleImage.jpg",
    likes: 842,
    description:
      "Exploring the boundaries of digital art through innovative techniques and vibrant colors",
  },
  {
    id: 8,
    title: "Nature Photography",
    author: {
      name: "James Wilson",
      image: "/singleImage.jpg",
      verified: true,
    },
    image: "/singleImage.jpg",
    likes: 567,
    description:
      "Capturing the raw beauty of landscapes and wildlife in their natural habitat",
  },
  {
    id: 9,
    title: "Abstract Designs",
    author: {
      name: "Maya Rodriguez",
      image: "/singleImage.jpg",
      verified: false,
    },
    image: "/singleImage.jpg",
    likes: 395,
    description:
      "Creating unique abstract compositions that challenge traditional artistic perspectives",
  },
];

const MediaCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className=" rounded-lg overflow-hidden shadow-md group"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8">
                  <img
                    src={item.author.image}
                    alt={item.author.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>by {item.author.name}</span>
                    {item.author.verified && (
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                </div>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  <Heart className="h-5 w-5 fill-none" />
                  <span className="text-sm">{item.likes}</span>
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MediaCards;

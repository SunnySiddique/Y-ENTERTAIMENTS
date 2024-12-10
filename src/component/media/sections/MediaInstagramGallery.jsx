import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    id: 1,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530098248-S07F4C8YLM7KD28PWJ3M/image-asset.jpeg?format=1500w",
    alt: "Image 1",
    des: "image1",
  },
  {
    id: 2,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530098845-MBK94FBRQW8DOM0FE2MV/image-asset.jpeg?format=1500w",
    alt: "Image 2",
    des: "image2",
  },
  {
    id: 3,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530099615-FLYF28NPVSPKRN1FPNHX/image-asset.jpeg?format=1500w",
    alt: "Image 3",
    des: "image3",
  },
  {
    id: 4,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530100290-P677MZSKSA0JEL26QOSL/image-asset.jpeg?format=1500w",
    alt: "Image 4",
    des: "image4",
  },
  {
    id: 5,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530100891-IXJMAIKV3M6L1K45A4UM/image-asset.jpeg?format=1500w",
    alt: "Image 5",
    des: "image5",
  },
  {
    id: 6,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530101543-CGLSG8VWV5JSE4GHF8CS/image-asset.jpeg?format=750w",
    alt: "Image 6",
    des: "image6",
  },
  {
    id: 7,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530102097-N94FKYMUET3SH4G4KXBI/image-asset.jpeg?format=750w",
    alt: "Image 7",
    des: "image7",
  },
  {
    id: 8,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530102749-GXUGU1CRKSXG2L5LKJFK/image-asset.jpeg?format=750w",
    alt: "Image 8",
    des: "image8",
  },
  {
    id: 9,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530103433-74YEBTSH1RF4TYXBM82L/image-asset.jpeg?format=750w",
    alt: "Image 9",
    des: "image9",
  },
  {
    id: 10,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530104056-GKAXEFFLRUOVGZWY4DJD/image-asset.jpeg?format=750w",
    alt: "Image 10",
    des: "image10",
  },
  {
    id: 11,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530104680-RFQO50LO3C9II1699UZP/image-asset.jpeg?format=750w",
    alt: "Image 11",
    des: "image11",
  },
  {
    id: 12,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530105390-PDO3TW4U5CR8X6CNQTQI/image-asset.jpeg?format=750w",
    alt: "Image 12",
    des: "image12",
  },
  {
    id: 13,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530106026-FSXKA8P8YIF702E9PIHC/image-asset.jpeg?format=750w",
    alt: "Image 13",
    des: "image13",
  },
  {
    id: 14,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530106715-M6HNEYXR4L3RKBXSC7DP/image-asset.jpeg?format=750w",
    alt: "Image 14",
    des: "image14",
  },
  {
    id: 15,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1728387330829-XBMJSOA7A9U7RQXUL7NS/image-asset.jpeg?format=750w",
    alt: "Image 15",
    des: "image15",
  },
  {
    id: 16,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530107963-6H65EJ8OFVI8D7J3GZH8/image-asset.jpeg?format=750w",
    alt: "Image 16",
    des: "image16",
  },
  {
    id: 17,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530109793-RGNDQW34F1RH77PFGSRQ/image-asset.jpeg?format=750w",
    alt: "Image 17",
    des: "image17",
  },
  {
    id: 18,
    url: "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1724530110545-8K2796VJKV3JV699YKG8/image-asset.jpeg?format=750w",
    alt: "Image 18",
    des: "image18",
  },
];

const MediaInstagramGallery = () => {
  const [activeThumb, setActiveThumb] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <h1 className="text-center text-5xl mb-8 uppercase font-semibold">
        Instagram
      </h1>
      <div className={`w-full max-w-xl p-4 shadow-lg rounded-lg space-y-6`}>
        {/* Main Swiper */}
        <Swiper
          loop={true}
          spaceBetween={10}
          modules={[Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update activeIndex on slide change
          className="rounded-lg"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="aspect-w-16 aspect-h-9 relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10 rounded-lg"></div>
                <img
                  src={item.url}
                  alt={item.alt}
                  className="object-cover w-full h-full rounded-lg"
                />
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70  p-4 rounded-b-lg z-20"
                    >
                      <p className="text-lg font-semibold text-white">
                        {item.des}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="cursor-pointer absolute left-2 top-1/2 z-30 transform -translate-y-1/2 bg-primary-content bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="w-6 h-6 text-gray" />
          </div>

          <div
            className="cursor-pointer absolute right-2 top-1/2 z-30 transform -translate-y-1/2 bg-primary-content bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="w-6 h-6 text-gray" />
          </div>
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation, Thumbs]}
          className="thumbs"
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={`cursor-pointer aspect-w-16 aspect-h-9 relative ${
                  activeIndex === i ? "" : "opacity-50"
                }`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10 rounded-md"></div>
                <img
                  src={item.url}
                  alt={`Thumbnail ${item.alt}`}
                  className="object-cover w-full h-full rounded-md hover:opacity-75 transition-opacity duration-200"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MediaInstagramGallery;

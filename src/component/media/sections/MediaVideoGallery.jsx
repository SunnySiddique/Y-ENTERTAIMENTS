import { motion } from "framer-motion";

const videos = [
  {
    id: "1",
    title: "BRUNO MARS: Live Performance at Libertine",
    duration: "02:06",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
  },
  {
    id: "2",
    title: "Lil Yachty: Performs 'Broccoli' Live at Libertine - 24/2/17",
    duration: "01:47",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
  },
  {
    id: "3",
    title: "Kehlan's Afterparty",
    duration: "04:28",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
  },
  {
    id: "4",
    title: "Chipmunk Interview [03/11/2016]",
    duration: "07:02",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
  },
];

const MediaVideoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-serif text-center mb-12"
      >
        VIDEOS
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <div className="relative aspect-video bg-primary-content rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="mt-3 text-lg font-medium"
            >
              {video.title}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaVideoGallery;

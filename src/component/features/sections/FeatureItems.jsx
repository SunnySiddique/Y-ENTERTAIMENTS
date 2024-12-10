import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const events = [
  {
    id: 1,
    title: "MODERN TECHNOLOGY TRENDS AND LUXURY WEBSITE DEVELOPMENT",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1732574139465-TOIQZBMG0XT92UUF64HG/Screenshot+2024-11-25+at+22.34.13.png",
    location: "New York, NY",
    description:
      "The luxury industry is at the forefront of integrating cutting-edge technologies to enhance customer engagement and deliver personalized experiences. AI-powered tools like chatbots, predictive analytics, and recommendation engines are revolutionizing customer interactions by tailoring services and content to individual preferences.",
  },
  {
    id: 2,
    title: "PRODUCT descriptionIGN ENGINEER IN THE SPOTLIGHT: MUHAMMAD TALHA",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1719894869600-PIFM3CZL8LG2F1VGHKXQ/1718898893243.jpg",
    description:
      "Collaborating with talented individuals like Muhammad Talha is something we truly cherish. In June, as we celebrated 11 years since Y Entertainment’s incorporation, we have released this beautiful gem that he descriptionigned for us to mark the occasion. It’s a digital 3D model of a bracelet, created as part of the innovation we are developing.",
  },
  {
    id: 3,
    title: "FILM RECOMMENDATION: NEVER LET ME GO",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1710276884031-GAQ9SIBPQ8M4D9KRCC4C/Screenshot+2024-03-12+at+20.54.18.png",
    description:
      "Our film recommendation by Amber Hagan comes in the wake of AI, and arising questions that come from the intersections of technological innovations and ethics. The film is based on the novel by Kazou Ishiguro and is set in an alternate history where human clones are raised in an English boarding school.",
  },
  {
    id: 4,
    title:
      "SHAPING THE FUTURE: THE IMPACT OF FEMALE LEADERSHIP IN TODAY’S BUSINESS WORLD",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1709920824961-9IAU1R6C4UPD4CUW4LZE/Screenshot+2024-03-08+at+17.54.42.png",
    description:
      "In today's dynamic business landscape, a major shift is underway that is transforming traditional notions of leadership and reshaping the future of business dynamics. At the forefront of this development is the growing influence of women leaders, whose impact on the business world transcends statistical measures and resonates deeply in organisational cultures.",
  },
  {
    id: 5,
    title: "ARTIST IN THE SPOTLIGHT: WISNU MANDALA",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1708802596900-TAPZC1BGI78DKJ1PTYT2/Y+colleagueArtboard+5.png",
    description:
      "Wisnu is a talented creative director, who has worked on numerous projects and shares his creativity through leading multiple creative campaigns. Some of these include companies such as Samsung, IKEA, Nestle, and Puma, among many others. Wisnu has won over 30 business-related awards within the past 2 years and has amassed experience from different advertising associations.",
  },
  {
    id: 6,
    title: "Classic Rock Hits",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1699365217357-ZZOIUJHFY5Z5ONMH5FE2/Screenshot+2023-11-04+at+18.04.40.png",
    description:
      "Wisnu is a talented creative director, who has worked on numerous projects and shares his creativity through leading multiple creative campaigns. Some of these include companies such as Samsung, IKEA, Nestle, and Puma, among many others. Wisnu has won over 30 business-related awards within the past 2 years and has amassed experience from different advertising associations.",
  },
  {
    id: 7,
    title:
      "FASHION FORWARD: THE UK'S CREATIVE EXPANSION MEETS THE DIGITAL FRONTIERs",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1691513521821-YONENH41V80444ION76L/4+ALO+artist+London.JPEG",
    description:
      "As a part of our primary market research, we have been examining approximately 200 high-end brands that are part of the London Fashion Week descriptionigner community run by the British Fashion Council. There were a few brands that caught our attention for their rich creative talent. If Web3, in conjunction with AI would be applied to their strategies, the potential for the whole sector to be transformed is enormous",
  },

  {
    id: 8,
    title: "ALO: CELEBRATING FEMININITY THROUGH UNIQUELY CRAFTED ART",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1581710123670-A4LSS891NSSKWQBSS0LT/Screenshot+2020-02-14+at+19.19.45.png",
    description:
      "ALO's artistry celebrates women and their strength while breaking the conventional boundaries of art through his diverse canvas of expression. His artwork seamlessly blends art and technology, creating a captivating fusion of creative tech. His unique style has garnered him widescriptionpread recognition, and he is renowned for his innovative approach to creating art.",
  },
  {
    id: 9,
    title: "THE RISE OF ROSALÍA",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1518095179912-LL8G22BX3XPG883LE2SW/19041-f0f7964c117497e31b24718d6f7f87207ce66f68-original.jpg",
    description:
      "It is a fact: Rosalia has become a mass phenomenon. It has not been because of her extra-long nails that caused a lot of controversy in the public. Nor has it been - although it has helped - her friendship with socialite Kylie Jenner. Rosalia’s secret? An urban and modern interpretation of flamenco. In her music she mixes it with trap and R&B. While she uses flamenco to differentiate herself, she subtly reintroduces it to a generations that has descriptionpised it or completely ignored it before.",
  },
  {
    id: 10,
    title: "Avant-gardist look to fashion",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1510832778823-JLLDODQ9CRB9S5ZO41JI/22550315_10155538534576131_2344810678578100972_o.jpg",
    description:
      "As it commonly known art and fashion descriptionign are having a longstanding relationship for a while now at least since 1855, year in which descriptionigners started to actively collaborate with artists. The fruits of this collaboration are to be considered no less than masterpieces. Their legacy still resonates today in the works of both contemporary artists and fashion descriptionigners. ",
  },
  {
    id: 11,
    title: "Classic Rock Hits",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1509926856056-MCZOWIU0ZM16XJDX5MWD/11+%281%29.jpg",
    description:
      "Italian Luxury Fashion Brands and How They Achieved Their Status",
  },
  {
    id: 12,
    title: "The New Valentino Collection",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1509927008667-WGF6D3FQJXBM2J0UY72Z/IMG_1773.jpg",
    description:
      "Valentino was founded in 1960 by two Italians named Valentino Garavani and Giancarlo Giammetti. Over the years, this fashion house has become renowned for its couture savoir faire. Their collection exemplified the best in elegance and each piece signifies a sense of timelessness and grace. The Valentino collection is inspired by hip-hop culture and each item displays a perfect mix of traditional craft with contemporary descriptionigns. It is not surprising this label has established a following of devoted customers who have been buying its clothes since the time Valentino was established.",
  },
  {
    id: 13,
    title: "What Should Men Wear To Members Clubs In London?",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1491730535761-U7OYBSH7AA7XWRGKEB0C/intro_london.jpg",
  },
  {
    id: 14,
    title: "Classic Rock Hits",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1491410400208-G7JC3YKD8NAKOWZQS8A8/artificial-intelligence-music-composition2.jpg",
    description:
      "Before entering a member’s club in London, it makes sense to do some due diligence regarding attire. Before you go out and buy some new clothes, you need to keep in mind that it never pays to wear the nicest clothes. Also, don’t wear black because most member’s clubs have loads of black lights. In such lighting conditions, black dresses do not look very good.",
  },
  {
    id: 15,
    title: "What to wear in nightclubs in London",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1490822878370-LGBRQYGFKJJCQP0ZAIST/Grime+New+Image.jpg",
    description:
      "If you are visiting London and would like to visit a nightclub, then there are a few things you need to know about what to wear in the nightclub.",
  },
  {
    id: 16,
    title: "4 Things To Do In London This Summer",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1490440525183-FOL0QDGY79FTRCI6VUOQ/shazamsnap11.jpg",
    description:
      "There are some great things you can do this summer in London that we summarise in this article, find out for yourself!",
  },
  {
    id: 17,
    title: "Tech: Chinese Search Engine Baidu Develops AI To Compose Music!",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1489603189548-M3RAORQP0KQGVKH28SRI/Dolce-Gabbana-2016-Spring-Summer-Mens-Campaign-006.jpg",
    description:
      "Artificial Intelligence (AI), will soon grow into a quintessential element of our everyday lives. In the past, it was projected that AI would materialise in the form of robots and applications, that would substitute the general functionality of the human condition.",
  },
  {
    id: 18,
    title: "Y Team’s Top 16 Grime Songs in 2016",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1489533621703-NNR8FGWVBOGFSXMH0ONL/una-1.jpg",
    description:
      "2016 was a great year for grime - nevertheless here are the top 16 grime songs that slid their way into music history.",
  },
  {
    id: 19,
    title: "BIO: Kehlani",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1488993347242-O4VE72G2T4QGWQ3BOSD2/10354889_930742863626167_3434785014323125009_n.jpg",
    description:
      "California-born Kehlani has been having her name flashed everywhere lately as one of the rising R&B talents of the new millennium.",
  },
];

const FeatureItems = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center text-primary-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Exciting Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <FeatureCard
              key={event.id}
              title={event.title}
              image={event.image}
              description={event.description}
              id={event.id}
            />
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            className={`bg-white/10 px-8 py-3 rounded-full font-bold text-lg shadow-md  transition-colors duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureItems;

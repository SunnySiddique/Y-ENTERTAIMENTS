import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "swiper/css";
import ParticlesContainer from "./canvas/ParticlesContainer";
import FeatureDetailPage from "./component/features/sections/FeatureDetailPage";
import Footer from "./component/footer/Footer";
import PageTransition from "./component/transitions/PageTransition";
import { useTheme } from "./context/ThemeContext";
import Background from "./layout/Background";
import Navbar from "./layout/Navbar";
import SettingPage from "./layout/SettingPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import FeaturesPage from "./pages/features/FeaturePage";
import HomePage from "./pages/home/HomePage";
import MediaPage from "./pages/media/MediaPage";

const App = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const showFooter = location.pathname !== "/settings";
  const showBackground = location.pathname !== "/settings";

  return (
    <>
      <div data-theme={theme} className="relative min-h-screen z">
        {showBackground && <Background />}
        <ParticlesContainer />
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="/features"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeaturesPage />
                </motion.div>
              }
            />
            <Route
              path="/feature/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeatureDetailPage />
                </motion.div>
              }
            />
            <Route
              path="/media"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <MediaPage />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />

            <Route path="/settings" element={<SettingPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default App;

import InteractiveShapeShow from "../../component/home/HeroSection";
import CTASection from "../../component/home/sections/CTASection";
import HomeAbout from "../../component/home/sections/HomeAbout";
import HomeFeaturesSection from "../../component/home/sections/HomeFeaturesSection";
import ServicesSection from "../../component/home/sections/ServicesSection";

const HomePage = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <InteractiveShapeShow />

        {/* Features Section */}
        <HomeFeaturesSection />

        {/* About Section */}
        <HomeAbout />

        {/* Services Section */}
        <ServicesSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
};

export default HomePage;

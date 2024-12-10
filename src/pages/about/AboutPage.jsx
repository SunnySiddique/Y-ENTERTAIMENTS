import AboutPeopleSection from "../../component/about/sections/AboutPeopleSection";
import AboutSection from "../../component/about/sections/AboutSection";
import AboutTeam from "../../component/about/sections/AboutTeam";
import CompanyHistorySection from "../../component/about/sections/CompanyHistorySection";
import CompanyOverviewSection from "../../component/about/sections/CompanyOverviewSection";
import TogetherSection from "../../component/about/sections/TogetherSection";
import ValuesSection from "../../component/about/sections/ValuesSection";
import VisionAndMissionSection from "../../component/about/sections/VisionAndMissionSection";

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <AboutSection />

      {/* Vision and Mission Section */}
      <VisionAndMissionSection />

      {/* Company Overview Section */}
      <CompanyOverviewSection />

      {/* Company History Section */}
      <CompanyHistorySection />

      {/* Values Section */}
      <ValuesSection />

      {/* About Team Section */}
      <AboutPeopleSection />

      {/* About Team Section */}
      <AboutTeam />

      {/* Together Section */}
      <TogetherSection />
    </div>
  );
};

export default AboutPage;

import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import AboutSection from "../../components/AboutSection";
import EmailSection from "../../components/EmailSection";
import Footer from "../../components/Footer";
import AchievementsSection from "../../components/AchievementsSection";
import DojosSection from "../../components/DojosSection";
import DojosSection2 from "../../components/DojosSection2";
import DojosSection3 from "../../components/DojosSection3";
import DojosSection4 from "../../components/DojosSection4";
import Challenge from "../../components/Challenge";
import Join from "../../components/Join";





export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <DojosSection />
        <DojosSection2 />
        <DojosSection3 />
        <DojosSection4 />
        <Challenge />
        <Join />
        <EmailSection />
      </div>
      <Footer />
    </main>
      
  
  );


}






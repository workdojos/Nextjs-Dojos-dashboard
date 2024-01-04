import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Challenge from "./components/Challenge";
import Join from "./components/Join";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <Challenge />
        <Join />
      </div>
      <Footer />
    </main>
      
  
  );


}






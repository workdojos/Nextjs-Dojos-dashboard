import TravelSection from "../components/TravelSection";
import Navbar from "../components/Navbar";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <TravelSection />
      </div>
    </main>
      
  
  );


}






import DojosSection4 from "./components/DojosSection4";
import Navbar from "./components/Navbar";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <DojosSection4 />
      </div>
    </main>
      
  
  );


}






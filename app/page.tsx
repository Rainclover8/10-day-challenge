import HeaderSection from "./components/HeaderSection";
import Tags from "./components/Tags";
import Card from "./components/ui/Card";
import MainNavbar from "./components/ui/Navbar";
import ProjectsCard from "./components/ui/ProjectsCard";

export default function Home() {



  return (
    <>
      <div className="">
       <div className="sticky top-2">
         <MainNavbar />
       </div>

        <HeaderSection />

        <div className="lg:w-1/2 px-6 mx-auto mt-24">
          <Card />
        </div>
        <div className="flex flex-col items-center mt-12 md:mt-24 px-4">
  {/* Başlık */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
    <span className="me-2">📂</span>Tamamlanan Projeler
  </h1>
  <small className="text-sm sm:text-base text-gray-400 mt-2 text-center">
    Şimdiye kadar tamamladığım projeler
  </small>

  {/* Kartlar */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 md:mt-12 w-full">
    <ProjectsCard 
      projectDay={"Gün 3"} 
      projectName={"YouTube Subscriber Counter"} 
      projectDetail={"Gerçek zamanlı YouTube abone sayacı uygulaması"} 
      tags={["React", "YouTube API"]} 
    />
  </div>
</div>

      </div>
    </>
  );
}

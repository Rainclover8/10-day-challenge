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
        <div className="flex justify-center flex-col items-center mt-24">
          <h1 className="text-4xl font-bold"> <span className="me-2">📂</span>Tamamlanan Projeler</h1>
          <small className="text-sm text-gray-300">Şimdiye kadar tamamladığım projeler</small>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <ProjectsCard projectDay={"Gün 3"} projectName={"YouTube Subscriber Counter"} projectDetail={"Gerçek zamanlı YouTube abone sayacı uygulaması"} tags={["React", "YouTube API"]} />

          </div>
        </div>
      </div>
    </>
  );
}

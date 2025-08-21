import HeaderSection from "./components/HeaderSection";
import Card from "./components/ui/Card";
import FeatureCard from "./components/ui/FeatureCard";
import MainNavbar from "./components/ui/Navbar";
import ProjectsCard from "./components/ui/ProjectsCard";
import { FaCode } from "react-icons/fa6";
import Footer from "./components/ui/Footer";
import AboutSection from "./components/ui/AboutSection";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <div className="sticky top-2">
          <MainNavbar />
        </div>

        <div className="" id="header">
          <HeaderSection />
        </div>

        <div className="lg:w-1/2 px-6 mx-auto mt-24">
          <Card />
          <div className="mt-12 mb-12 w-full">
            <a
              href="#projects"
              className="bg-blue-700 px-4 py-2 rounded-lg flex w-fit mx-auto hover:bg-blue-500 justify-center items-center gap-2"
            >
              <FaCode />
              Projeleri Incele
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 md:mt-36 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            <span className="me-2">📂</span>Tamamlanan Projeler
          </h1>
          <small className="text-sm sm:text-base text-gray-400 mt-2 text-center">
            Şimdiye kadar tamamladığım projeler
          </small>

          {/* Kartlar */}
          <div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 md:mt-12 w-full"
            id="projects"
          >
            <ProjectsCard
              projectDay={"Gün 3"}
              projectName={"YouTube Subscriber Counter"}
              projectDetail={"Gerçek zamanlı YouTube abone sayacı uygulaması"}
              tags={["React", "YouTube API"]}
            />
          </div>
        </div>

        {/* Gelecek Projeler */}
        <div className="mt-24 text-center">
          <h1 className="text-4xl font-bold mb-4">🚀 Gelecek Projeler</h1>
          <small className="text-sm text-gray-400 ">
            Yakında gelecek heyecan verici projeler
          </small>

          {/* Card yapısı */}
          <div className="flex justify-center gap-2 flex-wrap mt-8 items-center">
            <FeatureCard Text="Todo List Uygulaması" />
          </div>
        </div>

        {/* About Kısmı */}

        <AboutSection />
        {/* Footer */}

        <Footer />
        {/* Hepsini ayır */}
      </div>
    </>
  );
}

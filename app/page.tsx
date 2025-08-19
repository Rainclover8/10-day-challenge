import HeaderSection from "./components/HeaderSection";
import Tags from "./components/Tags";
import Card from "./components/ui/Card";
import FeatureCard from "./components/ui/FeatureCard";
import MainNavbar from "./components/ui/Navbar";
import ProjectsCard from "./components/ui/ProjectsCard";
import { FaCode } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { PiGithubLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

export default function Home() {



  return (
    <>
      <div className="h-full">
        <div className="sticky top-2">
          <MainNavbar />
        </div>

        <HeaderSection />

        <div className="lg:w-1/2 px-6 mx-auto mt-24">
          <Card />
          <div className="mt-12 mb-12 w-full" >
            <a href="#project" className="bg-blue-700 px-4 py-2 rounded-lg flex w-fit mx-auto hover:bg-blue-500 justify-center items-center gap-2"> <FaCode />Projeleri Incele</a>
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
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 md:mt-12 w-full" id="project">
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
          <small className="text-sm text-gray-400 ">Yakında gelecek heyecan verici projeler</small>

          {/* Card yapısı */}
          <div className="flex justify-center gap-2 flex-wrap mt-8 items-center">
            <FeatureCard Text="Todo List Uygulaması" />
          </div>
        </div>

        {/* About Kısmı */}
        <div className="text-center mt-24">
          <h1 className="text-4xl font-bold mb-12">🙋‍♂️ Hakkımda</h1>
          <div className="bg-gray-200 border shadow-2xl flex flex-col text-black mx-auto md:w-2/3 rounded-2xl">
            <span className='bg-gray-200 rounded-full p-4 mt-6 mx-auto bg-gradient-to-r w-fit from-blue-900 to-purple-300'>{<FaRegUser color="white" size={40} />}</span>
            <h1 className="text-2xl font-bold my-3">Ben Baran</h1>
            <p className="lg:p-12 md:p-4  ">
              Web ve mobil geliştiricisiyim. Yazılım projeleri, UI/UX ve farklı alanlarda kendimi geliştiriyorum. Şu anda YouTube'da 10 günlük bir seri yapıyorum ve her gün yeni bir proje ile becerilerimi geliştirmeye odaklanıyorum. Teknoloji ve yaratıcılığın kesiştiği noktada çalışmayı seviyorum.
            </p>

          </div>
        </div>

        {/* Footer */}
        <footer className="border-t flex flex-col items-center mt-24">
          <h1 className="text-2xl font-bold my-3" >🔗 Benimle İletişime Geç</h1>
          <div className="mb-3 flex gap-3 flex-wrap">
            <a
              href="https://www.instagram.com/rainclover8/"
              className='border bg-white border-gray-600 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-400 hover:text-white duration-200'
              target='_blank'
            >
              <FaInstagram /> Instagram
            </a><a
              href="https://github.com/Rainclover8/SubCounter"
              className='border bg-white border-gray-600 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-400 hover:text-white duration-200'
              target='_blank'
            >
              <PiGithubLogo /> Github
            </a>

          </div>
          <div className="">© 2025 Baran Çiçek. 10 Günde AirPods Challenge ile yapıldı.</div>
        </footer>

        {/* Hepsini ayır */}

      </div>
    </>
  );
}

import HeaderSection from "./components/HeaderSection";
import Card from "./components/ui/Card";
import MainNavbar from "./components/ui/Navbar";

export default function Home() {

  

  return (
    <>
    <div className="">
       <MainNavbar /> 
    </div>
      <HeaderSection/>

      <div className="w-1/2 mx-auto mt-24">
        <Card/>
      </div>
    </>
  );
}

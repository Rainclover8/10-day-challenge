import { CiCalendar } from "react-icons/ci";

function HeaderSection() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-evenly gap-x-2 text-[#436cc8] bg-gray-400 w-fit mx-auto px-3 py-2 rounded-full">
        <span className="">
          <CiCalendar size={20} />
        </span>
        <h6>Gün 5 / 10</h6>
      </div>

      <div className="text-center mt-12">
        <h1 className=" md:text-7xl text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-300 bg-clip-text text-transparent p-2 ">
          10 Günde AirPods Challenge
        </h1>
        <h6 className="md:text-2xl text-sm md:w-1/2 mx-auto md:mt-7 mt-3">
          Her gün yeni bir proje yaparak hedefime doğru ilerliyorum. Gün gün
          projeleri buradan takip edebilirsiniz.
        </h6>
      </div>
    </section>
  );
}

export default HeaderSection;

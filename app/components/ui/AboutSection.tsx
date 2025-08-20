import { FaRegUser } from "react-icons/fa";

function AboutSection() {
  return (
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
  )
}

export default AboutSection

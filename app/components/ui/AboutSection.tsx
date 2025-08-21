import { FaRegUser } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="mt-24 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">🙋‍♂️ Hakkımda</h1>
      
      <div className="bg-gray-100 border shadow-xl rounded-2xl max-w-3xl mx-auto p-6 md:p-10 flex flex-col items-center text-center">
        <div className="bg-gradient-to-r from-blue-900 to-purple-400 rounded-full p-4 flex items-center justify-center">
          <FaRegUser className="text-white" size={40} />
        </div>

        <h2 className="text-2xl font-bold my-4 text-black">Ben Baran</h2>
        
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Web ve mobil geliştiricisiyim. Yazılım projeleri, UI/UX ve farklı
          alanlarda kendimi geliştiriyorum. Şu anda YouTube'da 10 günlük bir seri
          yapıyorum ve her gün yeni bir proje ile becerilerimi geliştirmeye
          odaklanıyorum. Teknoloji ve yaratıcılığın kesiştiği noktada çalışmayı seviyorum.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;

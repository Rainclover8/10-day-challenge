import React from 'react'
import { CiCalendar } from "react-icons/ci";

function HeaderSection() {
  return (
    <section className='mt-12'>

      <div className="flex  items-center gap-4 text-[#436cc8] bg-gray-400 w-fit mx-auto p-1 rounded-full">
        <span className=''><CiCalendar size={20} /></span>
        <h6>Gün 2 / 10</h6>
      </div>

      <div className="text-center mt-12">
        <h1 className=' text-7xl font-bold bg-gradient-to-r from-blue-700 to-purple-300 bg-clip-text text-transparent p-2 '>10 Günde AirPods Challenge</h1>
        <h6 className='text-2xl w-1/2 mx-auto mt-7'>Her gün yeni bir proje yaparak hedefime doğru ilerliyorum. Gün gün projeleri buradan takip edebilirsiniz.</h6>
      </div>
    </section>
  )
}

export default HeaderSection

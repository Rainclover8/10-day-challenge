import React from 'react'
import { PiGithubLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
     <footer className="border-t flex flex-col items-center mt-24 gap-y-4">
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
          <div className="mb-2">© {new Date().getFullYear()} Baran Çiçek. 10 Günde AirPods Challenge ile yapıldı.</div>
        </footer>
  )
}

export default Footer

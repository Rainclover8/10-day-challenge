import React from 'react'
import { PiGithubLogo } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Tags from '../Tags';

function Card() {
    return (
        <div className='border rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between shadow-gray-50 gap-4 md:gap-0'>

            <div className="flex flex-col md:flex-1">
                <span className='bg-blue-600 py-1 px-4 rounded-full w-fit text-white text-sm'>Güncel Proje - Gün 3</span>
                <h1 className='text-2xl mt-4'>YouTube Subscriber Counter</h1>
                <small className='text-sm mt-2 text-gray-600'>
                    Gerçek zamanlı YouTube abone sayacı uygulaması
                </small>
                <Tags techStack={['React', 'YouTube API']} />
            </div>


            <div className="flex flex-col sm:flex-row gap-2 md:items-start md:justify-end">
                <a 
                    href="https://github.com/Rainclover8/SubCounter" 
                    className='border bg-white border-gray-600 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-400 hover:text-white duration-200'
                    target='_blank'
                > 
                    <PiGithubLogo /> Github
                </a>
                <a 
                    href="https://sub-counter.vercel.app/" 
                    target='_blank'
                    className='flex justify-center items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 duration-200'
                >
                    <FaExternalLinkAlt size={12} className="mr-2" /> Demo
                </a>
            </div>
        </div>
    )
}

export default Card

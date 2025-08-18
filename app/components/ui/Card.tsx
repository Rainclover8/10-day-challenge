import React from 'react'
import { PiGithubLogo } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Tags from '../Tags';


function Card() {
    return (
        <div className='border rounded-lg p-4 shadow-sm flex justify-between shadow-gray-50'>
            <div className="flex flex-col">
                <span className='bg-blue-600 py-0.5 px-4 rounded-full w-fit'>Güncel Proje - Gün 3</span>
                <h1 className='text-2xl mt-4'>YouTube Subscriber Counter</h1>
                <small className='text-sm mt-2'>Gerçek zamanlı YouTube abone sayacı uygulaması
                </small>
             <Tags techStack={['React', 'YouTube API']} />
            </div>
            <div className="flex gap-2">
                <a href="/" className='border bg-white border-gray-600 h-fit text-black px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-purple-400 duration-200'> <span><PiGithubLogo /></span> Github</a>
                <a href="/" className=' flex justify-center items-center bg-blue-700 text-white h-fit px-4 py-1 rounded-lg'>
                    <span className='flex items-center gap-x-3'><FaExternalLinkAlt size={12} /> Demo </span>
                </a>
            </div>
        </div>
    )
}

export default Card

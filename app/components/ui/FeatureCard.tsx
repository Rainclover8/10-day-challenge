import React from 'react'
import { MdOutlineLightbulb } from "react-icons/md";


function FeatureCard({ Text}:{Text: String}) {
    return (
        <div className='bg-white text-black border hover:border-blue-500 hover:shadow-lg hover:text-blue-700 font-bold flex flex-wrap w-fit px-10 py-8 rounded-lg justify-center items-center gap-3'>
            <span className='bg-gray-200 rounded-full p-2'>{<MdOutlineLightbulb />}</span>
            <h1>{Text}</h1>
        </div>
    )
}

export default FeatureCard

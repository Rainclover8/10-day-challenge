import React from 'react'

function Card() {
    return (
        <div className='border rounded-lg p-4 shadow-md flex justify-between'>
            <div className="flex flex-col">
                <span className='bg-blue-600 py-0.5 px-4 rounded-full w-fit'>Güncel Proje</span>
                <h1 className='text-2xl mt-4'>YouTube Subscriber Counter</h1>
                <small  className='text-sm mt-2'>Gerçek zamanlı YouTube abone sayacı uygulaması
                </small>
                <span className='mt-4 border w-fit px-2 rounded-full'>Tags</span>
            </div>
            <div className="flex gap-2">
                <a href="/" className='border bg-white border-gray-600 h-fit text-black px-4 py-1 rounded-lg'>Github</a>
                <a href="/" className='border bg-white border-gray-600 h-fit text-black px-4 py-1 rounded-lg'>Youtube</a>
            </div>
        </div>
    )
}

export default Card

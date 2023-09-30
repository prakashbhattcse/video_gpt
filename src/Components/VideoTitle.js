import React from 'react'

const VideoTitle = ({ overview, original_title }) => {
    return (
        <div className='absolute w-screen aspect-video pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black'>
        {/* <div className='absolute w-full md:w-1/2 md:left-1/4 md:top-1/3 text-white bg-gradient-to-r from-black p-6 md:p-24'> */}
            <h1 className='text-5xl font-bold mb-5 text-white'>{original_title}</h1>
            <p className='w-1/3 text-white'>{overview}</p>

            <div className="flex flex-row mt-7 gap-3">
                <button className="p-3 px-5 bg-white text-black w-28 rounded-md font-semibold"> ▶️ Play</button>
                <button className="p-3 px-5 bg-gray-100 opacity-60 text-black w-28 rounded-md font-semibold">Moreinfo</button>
            </div>
        </div>
    )
}

export default VideoTitle
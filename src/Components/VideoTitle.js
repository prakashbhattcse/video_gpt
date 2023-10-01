import React from 'react'

const VideoTitle = ({ overview, title }) => {
    return (
        <div className='absolute aspect-video pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black'>
            <h1 className='text-5xl font-bold mb-5 text-white w-1/3 text-left'>{title}</h1>
            <p className='md:inline-block w-1/3 text-white'>{overview}</p>

            <div className="flex flex-row mt-7 gap-3">
                <button type='button' className="p-3 px-5 bg-white text-black w-28 rounded-md font-semibold"> ▶️ Play</button>
                <button type='button' className="p-3 px-5 bg-gray-100 opacity-60 text-black w-28 rounded-md font-semibold">Moreinfo</button>
            </div>
        </div>
    )
}

export default VideoTitle
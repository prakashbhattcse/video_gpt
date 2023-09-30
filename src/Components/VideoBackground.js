import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useMovieTrailer } from './Hooks/useMovieTrailer'
import { useSelector } from 'react-redux'



const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  useMovieTrailer(id)
  return (
    <div className='w-screen absolute'>
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +
          "?&autoplay=1&mute=1"}
          frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
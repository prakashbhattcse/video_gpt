import {React,useEffect} from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if (!movies) return;

    const mainMovie = movies[12];

    const { original_title, overview, id } = mainMovie;


    return (

        <div className='relative bg-black  '>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>


        /* <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground Id={id} />
        </div> */
    )
}

export default MainContainer
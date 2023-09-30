import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../Utils/movieSlice';
import { API_OPTIONS } from '../../Utils/constant';



export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(
                'https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

            const json = await data.json();
           

            dispatch(addNowPlayingMovies(json.results))
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };



    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}
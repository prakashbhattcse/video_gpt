import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../../Utils/movieSlice';
import { API_OPTIONS } from '../../Utils/constant';



export const useNowPopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        try {
            const data = await fetch(
                'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

            const json = await data.json();
           

            dispatch(addPopularMovies(json.results))
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };


    useEffect(() => {
        getPopularMovies();
    }, [])
}
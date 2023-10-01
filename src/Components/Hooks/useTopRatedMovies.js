import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../Utils/constant";

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    
    const getTopRatedMovies = async () => {
        try {
            const data = await fetch(
                'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
                API_OPTIONS
            );
            const json = await data.json();
            console.log(json.results);
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []); // Fetch top-rated movies when the component mounts
}
import { useEffect } from "react";
import { addUpcomingMovies } from "../../Utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utils/constant";

export const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        try {
            const data = await fetch(
                'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
                API_OPTIONS
            );
            const json = await data.json();
            console.log(json.results);
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []); // Fetch top-rated movies when the component mounts
}
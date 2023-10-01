// import React from 'react'
// import { useSelector } from 'react-redux'
// import MovieList from './MovieList'
// import { usePopularMovies } from './Hooks/usePopularMovies';
// import SecondaryContainerPopular from './SecondaryConatinerPopular';

// const SecondaryContainer = () => {

//     const movies = useSelector((store => store.movies))



//     return (
//         movies.nowPlayingMovies && (
//             <div className="bg-black ">
//                 <div className=" mt-0 md:-mt-40 pl-2 md:pl-9 relative  z-20 ">
//                     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
//                     <SecondaryContainerPopular/>
//                     {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
//                     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
//                     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
//                     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
//                 </div>
//             </div>

//         )
//     )
// }

// export default SecondaryContainer


import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { useTopRatedMovies } from './Hooks/useTopRatedMovies';
import { useUpcomingMovies } from './Hooks/useUpcomingMovies';

const SecondaryContainer = () => {
    // Use the custom hook to fetch top-rated movies
    useTopRatedMovies();
    useUpcomingMovies();

    // these are the two ways in which im getting the data. 1 one is my using browse component and then movies.abc other is direct use
    const movies = useSelector((store) => store.movies);

    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

    return (
        movies.nowPlayingMovies && (
            <div className="bg-black ">
                <div className=" mt-0 md:-mt-40 pl-2 md:pl-9 relative  z-20 ">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Top Rated"} movies={topRatedMovies} />
                    <MovieList title={"Upcoming"} movies={upcomingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;

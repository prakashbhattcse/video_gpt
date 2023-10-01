import React from 'react'
import MovieCard from './MovieCard'

const MovieList = React.memo(({ title, movies }) => {

    // console.log(movies)
    return (
        <div className="pr-3 pb-7">
            <h1 className="text-md md:text-2xl pb-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex">
                    {
                        movies?.map((movie) => (
                            <MovieCard key={movie.id} posterpath={movie.poster_path} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
)


export default MovieList

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({

    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        upcomingMovies:null,
        popularMovies :null
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        }

    }

})

export const { addNowPlayingMovies, addTrailerVideo,addTopRatedMovies,addUpcomingMovies,addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
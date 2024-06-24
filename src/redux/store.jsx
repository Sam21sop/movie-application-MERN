import { configureStore } from "@reduxjs/toolkit";
import movieRedicer from "./moviesSlice/movieSlice.jsx";


const store = configureStore({
    reducer:{
        movies: movieRedicer
    }
});

export default store;

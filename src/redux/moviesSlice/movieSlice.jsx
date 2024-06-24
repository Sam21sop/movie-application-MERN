import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    watched:[]
};

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {

    }
});

// destruture the actions from movie slice
export const {} = movieSlice.actions;

// export reducer
const movieRedicer = movieSlice.reducer;
export default movieRedicer;

// state selector from reducer
const movieSelector = (state) =>  movieRedicer.state
console.log(movieSelector);
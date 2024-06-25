import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Inception', description: 'A mind-bending thriller', releaseYear: 2010, genre: 'Sci-Fi', watched: false, rating: 4, reviews: [] },
  { id: 2, title: 'The Dark Knight', description: 'Batman battles the Joker', releaseYear: 2008, genre: 'Action', watched: true, rating: 5, reviews: [] },
  { id: 3, title: 'Interstellar', description: 'A journey through space and time', releaseYear: 2014, genre: 'Sci-Fi', watched: false, rating: 5, reviews: [] },
  { id: 4, title: 'The Matrix', description: 'A hacker discovers reality is a simulation', releaseYear: 1999, genre: 'Sci-Fi', watched: true, rating: 4, reviews: [] },
  { id: 5, title: 'Pulp Fiction', description: 'Intersecting stories of crime and redemption', releaseYear: 1994, genre: 'Crime', watched: false, rating: 5, reviews: [] },
  { id: 6, title: 'Fight Club', description: 'An insomniac forms an underground fight club', releaseYear: 1999, genre: 'Drama', watched: false, rating: 4, reviews: [] },
  { id: 7, title: 'Forrest Gump', description: 'The life story of a slow-witted man', releaseYear: 1994, genre: 'Drama', watched: true, rating: 5, reviews: [] },
  { id: 8, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over years', releaseYear: 1994, genre: 'Drama', watched: true, rating: 5, reviews: [] },
  { id: 9, title: 'Gladiator', description: 'A betrayed Roman general seeks revenge', releaseYear: 2000, genre: 'Action', watched: false, rating: 4, reviews: [] },
  { id: 10, title: 'The Godfather', description: 'The aging patriarch of a crime family transfers control to his reluctant son', releaseYear: 1972, genre: 'Crime', watched: true, rating: 5, reviews: [] },
];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push({ ...action.payload, id: Date.now(), reviews: [] });
    },
    editMovie: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteMovie: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
    toggleWatched: (state, action) => {
      const movie = state.find(movie => movie.id === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },
    addReview: (state, action) => {
      const { movieId, review } = action.payload;
      const movie = state.find(movie => movie.id === movieId);
      if (movie) {
        movie.reviews.push({ ...review, id: Date.now() });
      }
    },
    changeRating: (state, action) => {
      const { movieId, rating } = action.payload;
      const movie = state.find(movie => movie.id === movieId);
      if (movie) {
        movie.rating = rating;
      }
    },
  },
});


// destruture the actions from movie slice
export const { addMovie, editMovie, deleteMovie, toggleWatched, addReview, changeRating } = moviesSlice.actions;


// export reducer
const movieRedicer = moviesSlice.reducer;
export default movieRedicer;

// state selector from reducer
export const movieSelector = (state) => state.movies
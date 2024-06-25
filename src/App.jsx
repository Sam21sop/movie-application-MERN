import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/shared_components/Header';
import Footer from './components/shared_components/Footer';
import MovieList from './components/movie_components/MovieList';
import MovieForm from './components/movie_components/MovieForm';
import MovieDetails from './components/movie_components/MovieDetails';

import { useDispatch, useSelector } from 'react-redux';
import { addMovie, addReview, changeRating, editMovie, movieSelector, toggleWatched } from './redux/moviesSlice/movieSlice';



const App = () => {
  const movies = useSelector(movieSelector);
  const dispatch = useDispatch();

  const handleSaveMovie = (movie) => {
    if (movie.id) {
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }
  };

  const handleReviewSubmit = (movieId, review) => {
    dispatch(addReview({ movieId, review }));
  };

  const handleToggleWatched = (movieId) => {
    dispatch(toggleWatched(movieId));
  };

  const handleRatingChange = (movieId, rating) => {
    dispatch(changeRating({ movieId, rating }));
  };

  const router = createBrowserRouter([
    {
      path: '/movie-application-MERN',
      element: <Header />,
      children: [
        {
          index: true,
          element: <MovieList movies={movies} />,
        },
        {
          path: '/movie-application-MERN/add',
          element: <MovieForm onSave={handleSaveMovie} />,
        },
        {
          path: '/movie-application-MERN/edit/:id',
          element: <MovieForm onSave={handleSaveMovie} />,
        },
        {
          path: '/movie-application-MERN/movies/:id',
          element: <MovieDetails
            movies={movies}
            onReviewSubmit={handleReviewSubmit}
            onToggleWatched={handleToggleWatched}
            onRatingChange={handleRatingChange}
          />,
        },
      ]
    }

  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};


export default App;
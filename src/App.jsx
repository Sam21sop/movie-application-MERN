import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify'
import Header from './components/shared_components/Header';
import Button from './components/shared_components/Button';
import Rating from './components/shared_components/Rating';
import Modal from './components/shared_components/Modal';
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

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/movie-application-MERN" element={<MovieList movies={movies} />} />
            <Route path="/movie-application-MERN/add" element={<MovieForm onSave={handleSaveMovie} />} />
            <Route path="/movie-application-MERN/edit/:id" element={<MovieForm onSave={handleSaveMovie} />} />
            <Route path="/movie-application-MERN/movies/:id" element={<MovieDetails movies={movies} onReviewSubmit={handleReviewSubmit} onToggleWatched={handleToggleWatched} onRatingChange={handleRatingChange} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


// const App = () => {

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [rating, setRating] = useState(0);

//   return (
//     <>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow container mx-auto p-4">
//           <h2 className="text-2xl mb-4">Welcome to Movie Watchlist</h2>
//           <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
//           <Rating rating={rating} onRatingChange={setRating} />
//           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
//             <p>This is a modal content</p>
//           </Modal>
//         </main>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App;
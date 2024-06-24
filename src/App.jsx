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



const App = () => {
  const [movies, setMovies] = useState([
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
  ]);

  const handleSaveMovie = (movie) => {
    if (movie.id) {
      setMovies(movies.map(m => m.id === movie.id ? movie : m));
    } else {
      setMovies([...movies, { ...movie, id: Date.now(), reviews: [] }]);
    }
  };

  const handleReviewSubmit = (movieId, review) => {
    setMovies(movies.map(m => m.id === movieId ? { ...m, reviews: [...m.reviews, { ...review, id: Date.now() }] } : m));
  };

  const handleToggleWatched = (movieId) => {
    setMovies(movies.map(m => m.id === movieId ? { ...m, watched: !m.watched } : m));
  };

  const handleRatingChange = (movieId, rating) => {
    setMovies(movies.map(m => m.id === movieId ? { ...m, rating } : m));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/movie-application-MERN/" element={<MovieList movies={movies} />} />
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
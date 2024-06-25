import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../../redux/moviesSlice/movieSlice';


const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const [movie, setMovie] = useState({ 
    title: '', 
    description: '', 
    releaseYear: '', 
    genre: '', 
    watched: false, 
    rating: 0 
  });

  useEffect(() => {
    if (id) {
      const existingMovie = movies.find(m => m.id === parseInt(id));
      if (existingMovie) {
        setMovie(existingMovie);
      }
    }
  }, [id, movies]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMovie({
      ...movie,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }
    navigate('/movie-application-MERN');
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl mb-4">{id ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={movie.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Watched
            <input
              type="checkbox"
              name="watched"
              checked={movie.watched}
              onChange={handleChange}
              className="ml-2"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            min="0"
            max="5"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default MovieForm;

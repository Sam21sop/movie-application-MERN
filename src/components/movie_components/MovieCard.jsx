import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Rating from '../shared_components/Rating';
import WatchedToggle from './WatchedToggle';
import EditIcon from '../shared_components/EditIcon';
import DeleteIcon from '../shared_components/DeleteIcon';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/moviesSlice/movieSlice';


const MovieCard = ({ movie }) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteHandler = () => {
        dispatch(deleteMovie(movie.id));
        navigate('/movie-application-MERN')
    }

    return (
        <div className="border p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="mb-2">{movie.description}</p>
            <p className="mb-2">Release Year: {movie.releaseYear}</p>
            <p className="mb-2">Genre: {movie.genre}</p>

            <div className='flex gap-4 items-center'>
                <WatchedToggle watched={movie.watched} />
                <Rating rating={movie.rating} onRatingChange={(rating) => onRatingChange(movie.id, rating)} />
            </div>
            <div className="flex justify-between mt-4">
                <Link to={`/movie-application-MERN/movies/${movie.id}`} className="text-blue-500">Details</Link>
                <div className='gap-4 flex'>
                    <Link to={`/movie-application-MERN/edit/${movie.id}`} className="text-blue-500">
                        <EditIcon />
                    </Link>
                    <button onClick={deleteHandler} className="text-blue-500">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

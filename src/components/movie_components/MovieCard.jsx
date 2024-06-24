import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '../shared_components/Rating';
import WatchedToggle from './WatchedToggle';


const MovieCard = ({ movie }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="mb-2">{movie.description}</p>
            <p className="mb-2">Release Year: {movie.releaseYear}</p>
            <p className="mb-2">Genre: {movie.genre}</p>
            <WatchedToggle watched={movie.watched} />
            <Rating rating={movie.rating} onRatingChange={() => { }} />
            <div className="flex justify-between mt-4">
                <Link to={`/movies/${movie.id}`} className="text-blue-500">Details</Link>
                <Link to={`/edit/${movie.id}`} className="text-blue-500">Edit</Link>
            </div>
        </div>
    );
};

export default MovieCard;

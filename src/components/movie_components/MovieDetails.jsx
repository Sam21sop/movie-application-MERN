import React from 'react';
import { useParams } from 'react-router-dom';

import ReviewForm from './ReviewForm';
import WatchedToggle from './WatchedToggle';
import Review from './ReviewCoponent';
import Rating from '../shared_components/Rating';

const MovieDetails = ({ movies, onReviewSubmit, onToggleWatched, onRatingChange }) => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <p>Movie not found.</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="mb-2">{movie.description}</p>
            <p className="mb-2">Release Year: {movie.releaseYear}</p>
            <p className="mb-2">Genre: {movie.genre}</p>
            <WatchedToggle watched={movie.watched} onToggle={() => onToggleWatched(movie.id)} />
            <Rating rating={movie.rating} onRatingChange={(rating) => onRatingChange(movie.id, rating)} />
            <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Reviews</h3>
                {movie.reviews.map(review => (
                    <Review key={review.id} review={review} />
                ))}
                <ReviewForm onSubmit={(review) => onReviewSubmit(movie.id, review)} />
            </div>
        </div>
    );
};

export default MovieDetails;

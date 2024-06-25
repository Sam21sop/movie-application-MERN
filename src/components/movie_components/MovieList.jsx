import React from 'react';
import MovieCard from './MovieCard';
import Grid from '../layout_components/Grid';


const MovieList = ({ movies, onToggleWatched }) => {
  return (
    <div className='grid w-full gap-4 px-6 grid-cols-4'>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatched={() => onToggleWatched(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;


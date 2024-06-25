import React from 'react';
import MovieCard from './MovieCard';
import Grid from '../layout_components/Grid';


const MovieList = ({ movies, onToggleWatched }) => {
  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatched={() => onToggleWatched(movie.id)}
        />
      ))}
    </Grid>
  );
};

export default MovieList;


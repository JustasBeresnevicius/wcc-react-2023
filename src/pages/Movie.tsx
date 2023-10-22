import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getMovie, GetMovieResponse } from '../services/movies';
import MovieCard from '../components/MovieCard';

const Movie = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<GetMovieResponse>();

    useEffect(() => {
        if (movieId) {
            getMovie({ movieId }).then((data) => setMovie(data));
        }
    }, [movieId]);

    return movie?.title ? (
        <MovieCard name={movie?.title} year={movie?.release_date} poster={movie?.poster_path} />
    ) : (
        <div>movie not found</div>
    );
};

export default Movie;

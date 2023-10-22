import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import MovieCard from '../MovieCard';
import { getMovies } from '../../services/movies';

import { GetMoviesResponse } from '../../services/movies';
import { useDebounce } from '../../utils/useDebounce';
import { Link } from 'react-router-dom';

const INPUT_CHANGE_DEBOUNCE_MS = 300;

const Autocomplete = () => {
    const [query, setQuery] = useState<string>('');
    const [movies, setMovies] = useState<GetMoviesResponse[]>([]);

    const debouncedInputValue = useDebounce(query, INPUT_CHANGE_DEBOUNCE_MS);

    useEffect(() => {
        getMovies({ query: debouncedInputValue }).then((data) => setMovies(data));
    }, [debouncedInputValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.text}>Find any movie!</div>
            <input type="text" className={styles.input} value={query} onChange={handleChange} />
            <div className={styles.movies}>
                {movies?.length > 0 &&
                    movies.map(
                        (movie) =>
                            movie?.poster_path && (
                                <Link to={`/movie/${movie.id}`} key={movie.poster_path + movie.release_date}>
                                    <MovieCard
                                        name={movie.original_title}
                                        year={movie.release_date}
                                        poster={movie.poster_path}
                                    />
                                </Link>
                            ),
                    )}
            </div>
        </div>
    );
};

export default Autocomplete;

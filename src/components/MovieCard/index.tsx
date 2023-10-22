import React from 'react';

import styles from './styles.module.css';

type MovieCardProps = {
    name: string;
    year: string;
    poster: string;
};

const MovieCard = ({ name, year, poster }: MovieCardProps) => {
    return (
        <div className={styles.card}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name} />
            <p>{name} </p>
            <p>{year}</p>
        </div>
    );
};

export default MovieCard;

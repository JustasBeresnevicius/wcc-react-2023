import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.css';

import Home from './pages/Home';
import Movie from './pages/Movie';

const App = () => {
    return (
        <div className={styles.app}>
            <header className={styles.header}>WCC Academy 2023</header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={`/movie/:movieId`} element={<Movie />} />
            </Routes>
        </div>
    );
};

export default App;

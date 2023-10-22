import React from 'react';
import styles from './App.module.css';
import Autocomplete from './components/Autocomplete';

const App = () => {
    console.log(styles, 'styles');

    // add router
    return (
        <div className={styles.app}>
            <header className={styles.header}>WCC Academy 2023</header>
            <Autocomplete />
        </div>
    );
};

export default App;

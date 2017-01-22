import React from 'react';
import styles from './App.css';

import Board from '../containers/Board';
import Toolbox from '../containers/Toolbox';
import Wave from '../containers/Wave';
import Start from '../containers/Start';

const App = ({ isGameStarted }) => {
    return isGameStarted ? (
        <div className={styles.base}>

            <Toolbox />

            <Board />

            <Wave />

        </div>
    ) : (
        <div className={ styles.overlay }>
            <Start />
        </div>
    );
};

export default App;
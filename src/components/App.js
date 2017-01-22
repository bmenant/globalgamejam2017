import React from 'react';
import styles from './App.css';

import Board from '../containers/Board';
import Toolbox from '../containers/Toolbox';
import Wave from '../containers/Wave';

const App = (props) => {
    return (
        <div className={styles.base}>

            <Toolbox />

            <Board />

            <Wave />

        </div>
    );
};

export default App;
import React from 'react';
import styles from './App.css';

import Board from '../containers/Board';
import Toolbox from '../containers/Toolbox';

const App = (props) => {
    const {hello} = props;

    return (
        <div className={styles.base}>

            <Toolbox />

            <Board />

        </div>
    );
};

export default App;
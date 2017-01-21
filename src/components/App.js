import React from 'react';
import styles from './App.css';

import Board from './Board';

const App = (props) => {
    const {hello} = props;

    return (
        <div className={styles.base}>

           <Board />

        </div>
    );
};

export default App;
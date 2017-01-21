import React from 'react';
import styles from './App.css';

const App = (props) => {
    const {hello} = props;

    return (
        <div className={styles.base}>
            <h2 onClick={() => hello('bibi')}>Hello</h2>
            <a onClick={() => hello('George')}> Autre </a>
        </div>
    );
};

export default App;
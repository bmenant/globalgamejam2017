import React, { Component } from 'react';
import {
    DIGGING_TOOL,
    BUILDING_TOOL,
} from '../actions';

import styles from './Toolbox.css';

import globalStyles from './App.css';

export default function Toolbox(props) {
    const { select, selectedTool, remainingActions } = props;

    return (
        <header className={ styles.base }>
            <div className={styles.diggIcon + ' ' + (selectedTool === DIGGING_TOOL ? styles.diggIconActive : '')} />

            <div className={styles.actionsCount}>
                <span className={globalStyles['digit_' + remainingActions] } />
            </div>

            <div className={styles.buildIcon + ' ' + (selectedTool === BUILDING_TOOL ? styles.buildIconActive : '')} />
        </header>
    );
}

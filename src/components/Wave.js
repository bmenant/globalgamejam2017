import React, { Component } from 'react';

const INITIAL_COUNTDOWN = 9;

import styles from './Wave.css';
import globalStyles from './App.css';

export default class Wave extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countdown: INITIAL_COUNTDOWN,
        };
        this.tickAfterOneSec();
    }

    componentWillReceiveProps(next) {
        if (next.isWaveInProgress !== this.props.isWaveInProgress && next.isWaveInProgress) {
            this.setState({
                countdown: 0,
            });
            setTimeout(() => {
                this.props.toggleWave()
            }, 1000);
        }
    }

    tickAfterOneSec() {
        setTimeout(() => {
            const { countdown } = this.state;
            this.setState({
                countdown: countdown > 0 ? countdown - 1 : INITIAL_COUNTDOWN,
            });
            this.tickAfterOneSec();
        }, 1000);
    }

    render() {
        const { isWaveInProgress } = this.props;
        const { countdown } = this.state;

        return (
            <footer className={ styles.container }>
                <div className={ styles.tide + (isWaveInProgress ? (' ' + styles.highTide) : '')}>
                    <div className={ styles.tideMask } />
                </div>
                { !isWaveInProgress && <span className={ globalStyles['digit_' + countdown] } /> }
            </footer>
        );
    }
}

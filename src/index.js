import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import socket from './socket';

import { triggerWave, fetchInitialState, gameOver } from './actions';

import App from './containers/App';

import createStore, { observeStore } from './createStore';

const store = createStore();

socket.on('incoming_wave', ({ roundId, wavePower }) => {
    if (typeof roundId === 'number') {
        store.dispatch(triggerWave(roundId, wavePower));
    }
});

socket.on('init', (data) => {
    store.dispatch(fetchInitialState(data));
});

observeStore(store, ({ boardValues, remainingActions, roundId, isGameOver }) => {
    if (remainingActions === 0) {
        socket.emit('max_actions_reached', { roundId });
    }

    if (!isGameOver && boardValues.length > 0 && !boardValues.some(row => row.some(tile => tile > 0))) {
        store.dispatch(gameOver());
        socket.emit('game_over', { roundId });
    }
});

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NewApp = require('./containers/App').default
        render(NewApp)
    });
}

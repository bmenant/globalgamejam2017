import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import socket from './socket';

import { triggerWave } from './actions';

import App from './containers/App';

import createStore, { observeStore } from './createStore';

createStore().then(store => {
    socket.on('incoming_wave', ({ roundId }) => {
        if (typeof roundId === 'number') {
            store.dispatch(triggerWave(roundId));
        }
    });

    observeStore(store, ({ remainingActions, roundId }) => {
        if (remainingActions === 0) {
            socket.emit('finished', roundId);
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
});


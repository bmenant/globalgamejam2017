import { createStore } from 'redux';

import reducers from './reducers';
import socket from './socket';

const initialStateP = new Promise(resolve => {
    socket.on('init', ({ board, roundId }) => {
        console.log('init', board, roundId)
        resolve({
            boardValues: board,
            roundId,
        });
    });
});

export default function () {
    const preloadedState = {
        selectedTool: null,
        remainingActions: ACTIONS_PER_ROUND,
    };

    return initialStateP.then(data => {
        const intialState = Object.freeze(Object.assign(preloadedState, data));

        return createStore(reducers, preloadedState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    });
}

export function observeStore(store, onChange) {
    let currentState;

    function handleChange() {
        let nextState = store.getState();
        if (nextState !== currentState) {
            currentState = nextState;
            onChange(currentState);
        }
    }

    let unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}
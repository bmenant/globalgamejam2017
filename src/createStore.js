import { createStore } from 'redux';

import reducers from './reducers';

export default function () {
    const preloadedState = Object.freeze({
        boardValues: [],
        selectedTool: null,
        roundId: null,
        remainingActions: ACTIONS_PER_ROUND,
    });

    return createStore(reducers, preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
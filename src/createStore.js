import { createStore } from 'redux';

import reducers from './reducers';
import {
    DIGGING_TOOL,
    BUILDING_TOOL,
} from  './constants';

export default function () {
    const preloadedState = Object.freeze({
        boardValues: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ],
        selectedTool: DIGGING_TOOL, //TODO constants used for tools
    });

    return createStore(reducers, preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
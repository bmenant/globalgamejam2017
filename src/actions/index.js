import socket from '../socket';

export const PLAYER_DIGGING = 'DIGGING';
export const PLAYER_BUILDING = 'BUILDING';

export const PLAYER_SELECTING_TOOL = 'SELECTING_TOOL';

// export const FINISH_ROUND = 'FINISH_ROUND';
export const INCOMING_WAVE = 'INCOMING_WAVE';

export const DIGGING_TOOL = 'DIGGING_TOOL';
export const BUILDING_TOOL = 'BUILDING_TOOL';

export const FETCH_INITIAL_STATE = 'FETCH_INITIAL_STATE';

export function digg(coordinates, value) {
    return {
        type: PLAYER_DIGGING,
        coordinates,
        value,
    };
}

export function build(coordinates, value) {
    return {
        type: PLAYER_BUILDING,
        coordinates,
        value,
    };
}

export function selectTool(tool) {
    return {
        type: PLAYER_SELECTING_TOOL,
        tool,
    }
}

export function triggerWave(roundId, wavePower) {
    return {
        type: INCOMING_WAVE,
        roundId,
        wavePower,
    }
}

export function fetchInitialState({ board, roundId }) {
    return {
        type: FETCH_INITIAL_STATE,
        boardValues: board,
        roundId,
    }
}
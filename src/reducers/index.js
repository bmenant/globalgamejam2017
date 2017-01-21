import {
    PLAYER_BUILDING,
    PLAYER_DIGGING,
    PLAYER_SELECTING_TOOL,
    INCOMING_WAVE,
} from '../actions';

const INCREASE = 1;
const DECREASE = -1;
const ACTION_POWER = 1;

function parseBoardValues(boardValues, coordinates, operator) {
    return boardValues.map((row, rowIndex) => {
        return rowIndex === coordinates.x ?
            row.map((column, columnIndex) => columnIndex === coordinates.y ?
                column + operator * ACTION_POWER :
                column
            ) : row;
    });
}

export default function (state = {}, action) {
    const { type } = action;

    switch(type) {

        case PLAYER_BUILDING: {
            const { coordinates, value } = action;
            const { remainingActions } = state;

            return remainingActions > 0 ?
                Object.assign({}, state, {
                    boardValues: parseBoardValues(state.boardValues, coordinates, INCREASE),
                    remainingActions: remainingActions -1,
                }) :
                state;
        }

        case PLAYER_DIGGING: {
            const { coordinates, value } = action;
            const { remainingActions } = state;

            return remainingActions > 0 ?
                Object.assign({}, state, {
                    boardValues:  parseBoardValues(state.boardValues, coordinates, DECREASE),
                    remainingActions: state.remainingActions - 1,
                }) :
                state;
        }

        case PLAYER_SELECTING_TOOL: {
            const { tool } = action;

            return tool === state.selectedTool ?
                state :
                Object.assign({}, state, { selectedTool: tool, });
        }

        case INCOMING_WAVE: {
            const { roundId } = action;

            return Object.assign({}, state, {
                roundId,
                remainingActions: ACTIONS_PER_ROUND,
            });
        }

        default: return state;
    }
}

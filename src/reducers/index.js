import {
    PLAYER_BUILDING,
    PLAYER_DIGGING,
    PLAYER_SELECTING_TOOL,
} from '../actions';

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

    const INCREASE = 1;
    const DECREASE = -1;

    switch(type) {

        case PLAYER_BUILDING: {
            const { coordinates, value } = action;

            return Object.assign({}, state, {
                boardValues: parseBoardValues(state.boardValues, coordinates, INCREASE),
            });
        }

        case PLAYER_DIGGING: {
            const { coordinates, value } = action;

            return Object.assign({}, state, {
                boardValues:  parseBoardValues(state.boardValues, coordinates, DECREASE),
            });
        }

        case PLAYER_SELECTING_TOOL: {
            const { tool } = action;

            return tool === state.selectedTool ?
                state :
                Object.assign({}, state, { selectedTool: tool, });
        }

        default: return state;
    }
}
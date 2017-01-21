import {
    PLAYER_BUILDING,
    PLAYER_DIGGING,
    PLAYER_SELECTING_TOOL,
    DIGGING_TOOL,
    BUILDING_TOOL,
    INCOMING_WAVE,
    FETCH_INITIAL_STATE,
    GAME_OVER,
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

            const newBoardValues = parseBoardValues(state.boardValues, coordinates, INCREASE);

            return remainingActions > 0 ?
                Object.assign({}, state, {
                    boardValues: newBoardValues,
                    remainingActions: remainingActions -1,
                    selectedTool: DIGGING_TOOL,
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
                    selectedTool: BUILDING_TOOL,
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
            const { roundId, wavePower } = action;
            const { boardValues } = state;

            let wavePowerPerColumns =  boardValues[0].map(() => wavePower);

            const newBoardValues = boardValues.map(row => {
                return row.map((tile, indexTile) => {

                    // There’s a hole or a pile
                    if (tile !== 0) {

                        // Decrease wave’s power
                        wavePowerPerColumns[indexTile] = wavePowerPerColumns[indexTile] - 1;

                        //  Water down piles or holes!
                        if (wavePowerPerColumns[indexTile] >= 0) {
                            return tile > 0 ?  tile - 1 : tile + 1;
                        }
                    }

                    return tile;
                })
            });

            return Object.assign({}, state, {
                boardValues: newBoardValues,
                roundId,
                remainingActions: ACTIONS_PER_ROUND,
            });
        }

        case FETCH_INITIAL_STATE: {
            const { roundId, boardValues } = action;

            return Object.assign({}, state, { boardValues, roundId });
        }

        case GAME_OVER: {
            return Object.assign({}, state, { isGameOver: true });
        }

        default: return state;
    }
}

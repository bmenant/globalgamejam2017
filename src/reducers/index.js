import {
    PLAYER_BUILDING,
    PLAYER_DIGGING,
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

        default: return state;
    }
}
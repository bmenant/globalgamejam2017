import {
    PLAYER_BUILDING,
    PLAYER_DIGGING,
} from '../actions';


export default function (state = {}, action) {
    const { type } = action;

    switch(type) {

        case PLAYER_BUILDING: {
            //FIXME change state with reduced value
            return Object.assign({}, state, {

            });
        }

        case PLAYER_DIGGING: {
            //FIXME change state with increased value
            return Object.assign({}, state, {

            });
        }

        default: return state;
    }
}
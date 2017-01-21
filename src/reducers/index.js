import {
    HELLO_SOMEBODY,
} from '../actions';


export default function (state = {}, action) {
    const { type } = action;

    switch(type) {

        case HELLO_SOMEBODY: {
            const { somebody } = action;

            console.log('Hello' + somebody)

            return Object.assign({}, state, {
                somebody,
            });
        }

        default: return state;
    }
}
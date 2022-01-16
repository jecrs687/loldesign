import { First, Second } from "../shared/nums"
import * as ActionTypes from './ActionTypes';
import { State } from "../shared/interfaces"
const Numbers = (state: State = { first: null, second: null, numbers: First.concat(Second) }, action: { type: string, payload: string | null }): {} => {
    switch (action.type) {
        case ActionTypes.SELECT_FIRST_NUMBER:
            return { ...state, first: action.payload }
        case ActionTypes.SELECT_SECOND_NUMBER:
            return { ...state, second: action.payload }
        case ActionTypes.INVERT:
            return { ...state, second: state.first, first: state.second }
        default:
            return state;
    }
};
export default Numbers;
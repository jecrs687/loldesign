import { PLANS } from "../shared/plans"
import * as ActionTypes from './ActionTypes';
import { Plans } from "../shared/interfaces"
export const Plan = (state: Plans[] = PLANS, action: { type: string, payload: Plans[] }): {} => {
    switch (action.type) {
        default:
            return state;
    }
};
export const PlanSelected = (state: string = "", action: { type: string, payload: string }): {} => {
    switch (action.type) {
        case ActionTypes.SELECT_PLAN:
            return action.payload
        default:
            return state;
    }
}
export const Minutes = (state: string = "", action: { type: string, payload: string }): {} => {
    switch (action.type) {
        case ActionTypes.MINUTES:
            return action.payload
        default:
            return state;
    }
}

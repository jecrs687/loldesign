import * as ActionTypes from './ActionTypes';

export const selectNumberOne = (number: string | null): { type: string, payload: string | null } => {
    return (
        {
            type: ActionTypes.SELECT_FIRST_NUMBER,
            payload: number
        }
    )
}
export const selectNumberTwo = (number: string | null): { type: string, payload: string | null } => {
    return (
        {
            type: ActionTypes.SELECT_SECOND_NUMBER,
            payload: number
        }
    )
}
export const invert = (): {} => {
    return (
        {
            type: ActionTypes.INVERT,
            payload: null
        }
    )
}
export const selectPlan = (plan: string): { type: string, payload: string } => {
    return (
        {
            type: ActionTypes.SELECT_PLAN,
            payload: plan
        }
    )
}
export const selectMinutes = (minutes: string): { type: string, payload: string } => {
    return (
        {
            type: ActionTypes.MINUTES,
            payload: minutes
        }
    )
}
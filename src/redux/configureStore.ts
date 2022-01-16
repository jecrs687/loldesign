import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import Numbers from './numbers'
import { Plan, PlanSelected, Minutes } from "./plans"
const store = createStore(
    combineReducers({
        numbers: Numbers,
        plans: Plan,
        planSelected: PlanSelected,
        minutes: Minutes
    }),
    applyMiddleware(logger)
);

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
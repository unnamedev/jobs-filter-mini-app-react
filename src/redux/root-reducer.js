import {combineReducers} from "redux"
import {positionReducer} from "./positions/position-reducer"
import {filterReducer} from "./filters/filter-reducer"

/**
 * Root Reducer
 * @type {Reducer<CombinedState<unknown>>}
 */
export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer
})
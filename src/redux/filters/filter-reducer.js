import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from "./filter-actions"

/**
 * Reducer
 * @param state
 * @param action
 * @returns []
 */
export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            return !state.includes(action.payload) ? [...state, action.payload] : state
        case REMOVE_FILTER:
            return state.filter(o => o !== action.payload)
        case CLEAR_FILTER:
            return []
        default:
            return state
    }
}
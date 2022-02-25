import {ADD_POSITION} from "./position-actions"

/**
 * Reducer
 * @param state
 * @param action
 * @returns []
 */
export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITION:
            return action.payload
        default:
            return state
    }
}
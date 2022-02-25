/**
 * Constants
 * @type {string}
 */
export const ADD_POSITION = "ADD_POSITION"

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export const addPositionAction = payload => ({type: ADD_POSITION, payload})

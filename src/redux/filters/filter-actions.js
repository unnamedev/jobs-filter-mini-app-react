/**
 * Constants
 * @type {string}
 */
export const ADD_FILTER = "ADD_FILTER"
export const REMOVE_FILTER = "REMOVE_FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export const addFilter = payload => ({type: ADD_FILTER, payload})

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export const removeFilter = payload => ({type: REMOVE_FILTER, payload})

/**
 *
 * @type {{type: string}}
 */
export const clearFilter = {type: CLEAR_FILTER}

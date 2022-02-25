import {createStore} from "redux"
import {rootReducer} from "./root-reducer"

/**
 * Store
 * @type {*}
 */
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
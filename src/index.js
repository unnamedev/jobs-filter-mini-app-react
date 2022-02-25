import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {store} from "./redux"
import "./assets/styles/index.scss"
import App from "./App"

/** Render Components */
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)

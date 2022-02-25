import {Header, JobList, SideBar} from "./components"
import data from "./mock/data.json"
import {useDispatch} from "react-redux"
import {addPositionAction} from "./redux/positions/position-actions"
import {useEffect} from "react"

/**
 * App Component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    /** Hooks */
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addPositionAction(data))
    }, [])

    /** Render */
    return <>
        <Header/>
        <div className="container main">
            <JobList/>
            <SideBar/>
        </div>
    </>
}

export default App

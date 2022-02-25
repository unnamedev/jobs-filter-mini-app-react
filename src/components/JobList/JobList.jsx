import {useDispatch, useSelector} from "react-redux"
import {selectAllFilters} from "../../redux/filters/filter-selectors"
import {selectVisiblePositions} from "../../redux/positions/position-selectors"
import {addFilter} from "../../redux/filters/filter-actions"
import {Card} from "../index"
import "./JobList.scss"

/**
 * JobList Component
 * @returns {JSX.Element}
 * @constructor
 */
const JobList = () => {
    /** Hooks */
    const dispatch = useDispatch()
    const currentFilters = useSelector(selectAllFilters)
    const positions = useSelector(state => selectVisiblePositions(state, currentFilters))
    /** Functions */
    const onItemClick = (filter) => dispatch(addFilter(filter))
    /** Render */
    return <div className="job-list">
        <h3 className="job-list__title">{positions.length} {positions.length === 1 ? "job" : "jobs"}</h3>
        <ul className="job-list__items">
            {positions.map(el => <Card key={el.id} {...el} onItemClick={onItemClick}/>)}
        </ul>
    </div>
}

export default JobList

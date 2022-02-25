import "./Panel.scss"
import {Badge} from "../index"
import {useDispatch, useSelector} from "react-redux"
import {clearFilter, removeFilter} from "../../redux/filters/filter-actions"

/**
 * Panel
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = () => {
    const dispatch = useDispatch()
    const filters = useSelector(({filters}) => filters)
    const handleDeleteFilter = filter => dispatch(removeFilter(filter))

    return <div className="container">
        <div className="panel">
            <h2 className="panel__title">Remote jobs</h2>
            <p className="panel__lead">Find your next remote job at companies like
                {" "}<span>Intercom</span>, <span>Spotify</span>, <span>Square</span>, and <span>Twitter</span>
            </p>
            {filters.length !== 0 &&
                <div className="panel__block">
                    <ul className="panel__list">
                        {filters.map(filter =>
                            <li className="panel__list-item" key={filter}>
                                <Badge className="outline" onClick={() => handleDeleteFilter(filter)}
                                >{filter}</Badge>
                            </li>
                        )}
                    </ul>
                    <button className="button button--transparent" onClick={() => dispatch(clearFilter)}>Clear all
                    </button>
                </div>
            }
        </div>
    </div>

}

export default Panel

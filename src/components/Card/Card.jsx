import PropTypes from "prop-types"
import {Badge} from "../index"
import "./Card.scss"

/**
 * Card Component
 * @param id
 * @param company
 * @param logo
 * @param isNew
 * @param featured
 * @param position
 * @param role
 * @param level
 * @param postedAt
 * @param contract
 * @param location
 * @param languages
 * @param tools
 * @param onItemClick
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({
                  id,
                  company,
                  logo,
                  new: isNew,
                  featured,
                  position,
                  role,
                  level,
                  postedAt,
                  contract,
                  location,
                  languages,
                  tools,
                  onItemClick
              }) => {
    const badges = [].concat(role, level, ...languages, ...tools)

    return <li className={`card ${featured ? "card--featured" : ""}`}>
        <div className="card__image">
            <img src={logo} alt={company}/>
        </div>

        <div className="card__content">

            <h3 className="card__position">{position}</h3>
            <div className="card__info">
                <span className="card__company">{company}</span>
                <div className="card__meta">
                    <Badge className="card__meta-item small small--grey rounded">{contract}</Badge>
                    <Badge className="card__meta-item small small--grey rounded">{location}</Badge>
                </div>
            </div>

            {(isNew || featured) &&
                <div className="card__types">
                    {isNew && <Badge className="small small--violet rounded">New</Badge>}
                    {featured && <Badge className="small small--violet rounded">Featured</Badge>}
                </div>
            }
            <ul className="card__badges">
                {badges.map(item =>
                    <Badge className="small small--accent rounded" key={item}
                           onClick={() => onItemClick(item)}>{item}</Badge>)}
            </ul>
        </div>
        <p className="card__posted">{postedAt}</p>
    </li>
}

/** Check props */
Card.propTypes = {
    id: PropTypes.number,
    company: PropTypes.string,
    logo: PropTypes.string,
    new: PropTypes.bool,
    featured: PropTypes.bool,
    position: PropTypes.string,
    role: PropTypes.string,
    level: PropTypes.string,
    postedAt: PropTypes.string,
    contract: PropTypes.string,
    location: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string),
    handleAddFilter: PropTypes.func
}

export default Card

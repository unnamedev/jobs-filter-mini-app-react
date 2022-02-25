import "./Badge.scss"

/**
 * Badge
 * @returns {JSX.Element}
 * @constructor
 */
const Badge = ({children, onClick, className}) =>
    <div className={`badge ${className ? className : ""}`} onClick={onClick}>
        <span>{children}</span>
    </div>

export default Badge

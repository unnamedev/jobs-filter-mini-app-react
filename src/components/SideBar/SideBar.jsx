import {FaTelegramPlane} from "react-icons/fa"
import "./SideBar.scss"

/**
 * SideBar Component
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = () =>
    <aside className="sidebar">
        <div className="sidebar__item sidebar__item--subscribe">
            <p className="sidebar__icon">
                <FaTelegramPlane size={28}/>
            </p>
            <h3 className="sidebar__title">Weekly newsletter</h3>
            <p className="sidebar__text">
                We'll keep you updated when the best new remote jobs pop up on TopJobs
            </p>
            <form className="sidebar__form">
                <input type="email" className="sidebar__field" required placeholder="Enter your email"/>
                <p className="sidebar__privacy">We care about your data in our <a href="/#">privacy policy</a></p>
                <button className="button sidebar__button" type="submit">Subscribe</button>
            </form>
        </div>
        <div className="sidebar__item sidebar__item--popular">
            <h3 className="sidebar__title">Popular searches</h3>
            <ul className="sidebar__list">
                <li className="sidebar__list-row">
                    <span className="sidebar__list-name">Product design</span>
                    <span className="sidebar__list-count">204 jobs</span>
                </li>
                <li className="sidebar__list-row">
                    <span className="sidebar__list-name">Customer Success</span>
                    <span className="sidebar__list-count">80 jobs</span>
                </li>
                <li className="sidebar__list-row">
                    <span className="sidebar__list-name">Product manager</span>
                    <span className="sidebar__list-count">120 jobs</span>
                </li>
                <li className="sidebar__list-row">
                    <span className="sidebar__list-name">Engineering manager</span>
                    <span className="sidebar__list-count">64 jobs</span>
                </li>
            </ul>
        </div>
    </aside>

export default SideBar

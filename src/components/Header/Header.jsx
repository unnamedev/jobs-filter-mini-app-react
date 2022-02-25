import "./Header.scss"
import {GiHamburgerMenu} from "react-icons/gi"
import {Panel} from "../index";

/**
 * Header
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => <header className="header">
    <nav className="header__nav container">
        <a href="/#" className="header__logo">
            <img src="./images/logo.svg" alt="TopJobs" className="header__logo-ico"/>
        </a>

        <button className="header__burger">
            <GiHamburgerMenu size={22}/>
        </button>

        <ul className="header__menu">
            <li className="header__menu-item"><a href="/#" className="header__menu-link">Jobs</a></li>
            <li className="header__menu-item"><a href="/#" className="header__menu-link">Companies</a></li>
            <li className="header__menu-item"><a href="/#" className="header__menu-link">Pricing</a></li>
            <li className="header__menu-item"><a href="/#" className="header__menu-link">Community</a></li>
        </ul>
    </nav>


    <Panel/>
</header>

export default Header

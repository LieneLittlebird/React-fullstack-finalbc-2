import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <div>
            <ul id="navbar">
                <li>
                    <NavLink className="nav-link" to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/news">
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/discussion">
                        Discussion
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/register">
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
export default Header;

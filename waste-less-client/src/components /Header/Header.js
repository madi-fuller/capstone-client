import "./Header.scss";
import logo from "../../assets/logos/wasteless-logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
    <nav className="header__nav-bar">
      <div className="header__container">
        <NavLink to="/">
          <img
            className="header__logo"
            src={logo}
            alt="WasteLess logo with globe"
          />
        </NavLink>
        <div className="header__navigation">
          <ul className="header__navigation">
            <li className="nav-item">
              <NavLink to="/" className="header__nav-item">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/waste-log" className="header__nav-item">
                Waste Log
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recipe" className="header__nav-item">
                Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="header__nav-item">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default Header;

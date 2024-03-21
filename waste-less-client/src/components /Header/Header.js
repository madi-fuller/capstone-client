import "./Header.scss";
import logo from "../../assets/logos/wasteless-logo.png";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink to="/">
            <img
              className="header__logo"
              src={logo}
              alt="WasteLess logo with globe"
            />
          </NavLink>
          <div
            class="collapse navbar-collapse header__navigation"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/" class=" header__nav-item nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="header__nav-item nav-link" to="/waste-log">
                  Waste Log
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="header__nav-item nav-link" to="/">
                  Recipes
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="header__nav-item nav-link" to="/">
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

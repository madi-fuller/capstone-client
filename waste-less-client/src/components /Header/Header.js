import logo from "../../assets/logos/wasteless-logo.png";
import "./Header.scss";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img
            className="header__logo"
            src={logo}
            alt="WasteLess logo with globe"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Waste Log
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Recipes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

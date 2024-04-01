import "./Login.scss";
import { useNavigate } from "react-router-dom";
import planet from "../../assets/images/happy-planet.png";

function LoginModal({ onClose }) {
  const navigate = useNavigate();
  //after logging in navigate to user profile
  const handleButtonClick = () => {
    onClose();
    navigate("/profile");
  };
  return (
    <div className="login">
      <div class="container mt-5 login__container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div className="login__header">
                  <div className="login__header-container">
                    <img
                      className="login__icon"
                      src={planet}
                      alt="happy planet"
                    />
                    <h3 class="login__title card-title">Login</h3>
                  </div>
                  <p className="login__close" onClick={() => onClose()}>
                    &times;
                  </p>
                </div>
                <div className="login__content">
                  <form>
                    <div class="form-group">
                      <label for="username">Username</label>
                      <input
                        type="text"
                        class="login__input form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="login__input form-control"
                        id="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <button
                      type="submit"
                      class="login__btn btn btn-primary"
                      onClick={handleButtonClick}
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

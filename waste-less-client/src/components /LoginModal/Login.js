import "./Login.scss";

function LoginModal() {
  return (
    <div className="login">
    
      <div class="container mt-5 login__container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div className="login__header">
                <h5 class="card-title">Login</h5>
                <p>&times;</p>
                </div>
                <div className="login__content">
                <form>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" class="login__btn btn btn-primary">
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

import "./PledgeForm.scss";
import planet from "../../assets/images/happy-planet.png";
import { useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ValidateSignupForm from "../../utils/SignUpValidator";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function PledgeForm({ onCancel, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [invalidInput, setInvalidInput] = useState({
    name: "",
    username: "",
    password: "",
    reason_for_reducing: ""
  });

  const formRef = useRef();
  const userNameRef = useRef();
  const userReasonRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const API_URL = "http://localhost:8080";

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: userNameRef.current.value,
      reason_for_reducing: userReasonRef.current.value,
      password: passwordRef.current.value,
      username: usernameRef.current.value
    };

    const postNewUser = async () => {
      try {
        await axios.post(`${API_URL}/api/user-profile`, newUser);
        setSubmitted(true);
      } catch (error) {
        console.error("There has been an error", error);
      }
    };

    const isFormValid = ValidateSignupForm(newUser).isFormValid;

    if(isFormValid) {
      postNewUser();
    }

    const errorMessage = ValidateSignupForm(newUser).errorMessage;
    setInvalidInput(errorMessage);
  };

  return (
    <div className="modal__pledge-form">
      <div className="modal__pledge-form-container">
        <div className="modal__header">
          <div className="modal__header-container">
            <img className="modal__icon" src={planet} alt="happy planet" />
            <h3 className="modal__pledge-form__title"> Sign up!</h3>
          </div>
          <p className="modal__close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="modal__content">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="pledge-form__input form-control "
                id="name"
                placeholder="Enter your name"
                ref={userNameRef}
              />
              <ErrorMessage message={invalidInput.name} />
            </div>
            <div className = "mb-3">
            <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="pledge-form__input form-control "
                id="username"
                placeholder="Enter a username"
                ref={usernameRef}
              />
              <ErrorMessage message={invalidInput.username} />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="pledge-form__input form-control "
                id="password"
                placeholder="Enter a password"
                ref={passwordRef}
              />
              <ErrorMessage message={invalidInput.password} />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                Reason for reducing waste:
              </label>
              <textarea
                className="form-control pledge-form__input"
                id="reason"
                rows="3"
                placeholder="Enter your reason"
                ref={userReasonRef}
              ></textarea>
              <ErrorMessage message={invalidInput.reason_for_reducing} />
            </div>
            <div class="mb-3">
              <label for="datePicker" class="form-label">
                Select Date:
              </label>
              <input
                type="date"
                class="form-control pledge-form__input"
                id="datePicker"
              />
            </div>
            <div className="modal__footer">
              <button
                type="submit"
                className="btn btn-primary modal__pledge-form__button"
              >
                Commit to Change
              </button>
              <button
                className="modal__pledge-form__button--cancel"
                onClick={() => onCancel()}
              >
                Cancel
              </button>
            </div>
          </form>
          {submitted && (
            <div className="modal__success">
              <p className="modal__link">You have successfully signed up!</p>
              <NavLink className="modal__link" to="/profile">
                <p>Check out your profile</p>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PledgeForm;

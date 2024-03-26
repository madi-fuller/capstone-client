import "./PledgeForm.scss";
import planet from "../../assets/images/happy-planet.png";

function PledgeForm({ onSubmit, onCancel, onClose }) {
  return (
    //FIX BEM!!
    <div className="modal__pledge-form">
      <div className="modal__pledge-form-container">
        <div className="modal__header">
          <div className="modal__header-container">
          <img className="modal__icon"src={planet} alt="happy planet" />
        <h3 className="modal__pledge-form__title"> Sign up!</h3>
        </div>
          <p className="modal__close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="modal__content">
          
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="pledge-form__input form-control "
                id="name"
                placeholder="Enter your name"
              />
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
              ></textarea>
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
                onClick={() => onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PledgeForm;

import 'bootstrap/dist/css/bootstrap.min.css';
import "./PledgeForm.scss";

function PledgeForm() {
  return (
    <div className="pledge-form">
        <h3 className="pledge-form__title"> Take the Pledge!</h3>
      <form >
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
          <input type="date" class="form-control pledge-form__input" id="datePicker" />
        </div>
        <button type="submit" className="btn btn-primary pledge-form__button">
          Commit to Change
        </button>
      </form>
      </div>
  )
}


export default PledgeForm;

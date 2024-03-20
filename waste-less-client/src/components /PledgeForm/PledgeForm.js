import "./PledgeForm.scss";

function PledgeForm() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Reason for reducing waste
          </label>
          <textarea
            className="form-control"
            id="reason"
            rows="3"
            placeholder="Enter your reason"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="datePicker" class="form-label">
            Select Date:
          </label>
          <input type="date" class="form-control" id="datePicker" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;

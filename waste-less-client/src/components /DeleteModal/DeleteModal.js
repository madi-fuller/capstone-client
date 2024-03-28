import "./DeleteModal.scss";
import trash from "../../assets/icons/remove.png";

function DeleteModal() {
  return (
    <section className="delete-modal">
      <div className="delete-modal__container">
        <div className="delete-modal__container-header">
          <p className="delete-modal__close">&times;</p>
        </div>
        <div className="delete-modal__content">
          <img className="delete-modal__icon" src={trash} alt="delete" />
          <h4 className="delete-modal__title">Are you sure?</h4>
          <p className="delete-modal__text">Do you really want to delete this item? Removing this item from your log will effect your profile stats</p>
        </div>
        <div className="delete-modal__footer">
            <button className="delete-modal__btn--cancel">Cancel</button>
            <button className="delete-modal__btn--delete">Delete</button>
        </div>
      </div>
    </section>
  );
}

export default DeleteModal;

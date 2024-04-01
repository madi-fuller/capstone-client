import "./ErrorMessage.scss";

function ErrorMessage({ message }) {
  return (
    <div className="error">
      {message && (
        <div className="error__message">
          <p className="error__text">{message}</p>
        </div>
      )}
    </div>
  );
}

export default ErrorMessage;

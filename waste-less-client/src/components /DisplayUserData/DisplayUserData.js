import "./DisplayUserData.scss";
function DisplayUserData() {
  return (
    <div className="user-data">
      <h2 className="user-data__title">Your reason for reducing waste: </h2>
      <div className="user-data__container">
        <div className="user-data__reason">
          <p className="user-data__reason-text">Sample reason</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayUserData;

import "./DisplayUserData.scss";
function DisplayUserData() {
  return (
    //user data hard coded for now
    //will be dynamic based on who is logged in when auth is implemented

    <div className="user-data">
      <h2 className="user-data__title">Your reason for reducing waste: </h2>
      <div className="user-data__container">
        <div className="user-data__reason">
          <p className="user-data__reason-text">Reduce my carbon footprint by limiting the amount of resources are used for food that don't end up being consumed</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayUserData;

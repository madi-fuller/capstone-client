import CategoryGraph from "../../components /CategoryGraph/CategoryGraph";
import WasteOverTime from "../../components /WasteOverTimeGraph/WasteOverTime";
import C02Emissions from "../../components /C02Emissions/C02Emissions";
import DisplayUserData from "../../components /DisplayUserData/DisplayUserData";
import WasteTips from "../../components /WasteTips/WasteTips";
import "./ProfilePage.scss";
function ProfilePage() {
  return (
    //user name hardcoded for now until authentication is implemented

    <div className="profile">
      <div className="profile__header">
        <h1 className="profile__title"> Hello, Madi! View Your Dashboard:</h1>
      </div>
      <div className="profile__container">
        <DisplayUserData />
        <div className="profile__waste-tips">
          <WasteTips />
        </div>
      </div>
      <div>
        <div className="profile__data">
          <CategoryGraph />
          <div className="profile__waste-data">
            <WasteOverTime />
          </div>
          <div className="profile__carbon-data">
            <C02Emissions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

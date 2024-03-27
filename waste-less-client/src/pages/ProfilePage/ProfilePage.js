import CategoryGraph from "../../components /CategoryGraph/CategoryGraph";
import WasteOverTime from "../../components /WasteOverTimeGraph/WasteOverTime";
import C02Emissions from "../../components /C02Emissions/C02Emissions";
import "./ProfilePage.scss";
function ProfilePage () {
    return (
        <div className="profile">
            <div className="profile__header">
            <h1 className="profile__title"> Hello, User! Your Dashboard:</h1>
            </div>
            <div className="profile__data">
            <CategoryGraph />
            <div className="profile__waste-data">
            <WasteOverTime />
            </div>
            <C02Emissions />
            </div>
        </div>
    )
}

export default ProfilePage;
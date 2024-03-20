import logo from "../../assets/logos/logo-no-image.png";
import welcome from "../../assets/images/homepage-planet.png";
import "./HomePage.scss";
import PledgeForm from "../../components /PledgeForm/PledgeForm";

function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__logo-container">
            <img className="homepage__logo" src={logo} alt="WasteLess logo" />
            </div>
            <div className="homepage__logo-container">
            <h2 className="homepage__subheading"> Make a Commitment to Waste Less Food in Your Home</h2>
            </div>
            <div className="homepage__pledge-container">
            <img className="homepage__image" src={welcome} alt="globe saying hi"/>
            <PledgeForm />
            </div>
        </div>
    )
}

export default HomePage;

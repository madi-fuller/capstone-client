import logo from "../../assets/logos/logo-no-image.png";
import welcome from "../../assets/images/homepage-planet.png";
import "./HomePage.scss";

function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__logo-container">
            <img className="homepage__logo" src={logo} alt="WasteLess logo" />
            </div>
            <div className="homepage__logo-container">
            <h2 className="homepage__subheading"> Make a Commitment to Waste Less Food in Your Home</h2>
            </div>
            <img className="homepage__image" src={welcome} alt="globe saying hi"/>
        </div>
    )
}

export default HomePage;

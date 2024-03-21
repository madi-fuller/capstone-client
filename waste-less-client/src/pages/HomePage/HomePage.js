import welcome from "../../assets/images/homepage-planet.png";
import "./HomePage.scss";
import PledgeForm from "../../components /PledgeForm/PledgeForm";


function HomePage() {
  return (
    <div>
      <div className="homepage">
        <div className="homepage__pledge-container">
          <img
            className="homepage__image"
            src={welcome}
            alt="globe saying hi"
          />
          <PledgeForm />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

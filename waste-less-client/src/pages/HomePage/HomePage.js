import welcome from "../../assets/images/homepage-planet.png";
import "./HomePage.scss";
import PledgeForm from "../../components /PledgeFormModal/PledgeForm";
import { useState } from "react";

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
//   const [message, setMessage] = useState("");
  const handleButtonClick = (value) => {
    setModalOpen(false);
    // setMessage(value);
  }
  return (
    <div>
      <div className="homepage">
        {modalOpen && <PledgeForm onSubmit={null} onCancel={handleButtonClick} onClose={handleButtonClick}/>}
        <div className="homepage__hero-container">
          <div className="homepage__hero-container-text">
            <h2 className="homepage__hero-title">
              Join the Fight Against Food Waste
            </h2>
            <h4 className="homepage__hero-text">
              Empower yourself to make a difference in the fight against food
              waste. Discover practical solutions and sustainable habits that
              are beneficial for both you and the planet.
            </h4>
            <button className="homepage__hero-button" onClick={() => setModalOpen(true)}>Commit to Change</button>
          </div>
          <img
            className="homepage__image"
            src={welcome}
            alt="globe saying hi"
          />
        </div>
        <div className="homepage__pledge-container"></div>
      </div>
    </div>
  );
}

export default HomePage;

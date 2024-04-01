import welcome from "../../assets/images/homepage-planet.png";
import "./HomePage.scss";
import PledgeForm from "../../components /PledgeFormModal/PledgeForm";
import LoginModal from "../../components /LoginModal/Login";
import { useState } from "react";


function HomePage() {
  const [commitModalOpen, setCommitModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);


  const handleCommitButtonClick = () => {
    setCommitModalOpen(true);
  };

  const handleLoginButtonClick = () => {
    setLoginModalOpen(true);
  };

  const handleCommitModalClose = () => {
    setCommitModalOpen(false);
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
    
  };
  return (
    <div>
      <div className="homepage">
        {commitModalOpen && (
          <PledgeForm
            onSubmit={null}
            onCancel={handleCommitModalClose}
            onClose={handleCommitModalClose}
          />
        )}
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
            
            <button
              className="homepage__hero-button"
              onClick= {handleCommitButtonClick}
            >
              Commit to Change
            </button>
            <button className="homepage__login-button" onClick={handleLoginButtonClick}>
              Login
            </button>
          </div>
          <img
            className="homepage__image"
            src={welcome}
            alt="globe saying hi"
          />
        </div>
        <div className="homepage__pledge-container"></div>
      </div>
      {loginModalOpen && (
      <LoginModal 
      onSubmit={null}
      onClose={handleLoginModalClose}/>
      )}
    </div>
  );
}

export default HomePage;

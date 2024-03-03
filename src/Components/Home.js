import React from "react";
import BannerImage from "../Assets/Picture1.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/signin");
  }

  return (
    <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            ToriTomo
          </h1>
          <p className="primary-text">
            Join ToriTomo, where young people exchange favors, skills, and services to enrich our community. Dive into a network where giving meets receiving, and unlock services beyond reach. Be part of our favor-exchange community today!
          </p>
          <button className="secondary-button" onClick={handleClick}>
            Make Friends Today <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

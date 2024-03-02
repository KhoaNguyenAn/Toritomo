import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Profile from "./Profile"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Torimoto
          </h1>
          <p className="primary-text">
          Torimoto empowers users to trade skills and services seamlessly, fostering a vibrant community where value is exchanged without the need for traditional currency. Join our platform to unlock a world of collaborative opportunities and connect with others who share your passion for a new era of trade and barter.
          </p>
          <button className="secondary-button" onClick={() => window.open('/Profile', '_blank')}>
            Trade Now <FiArrowRight />{" "}
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

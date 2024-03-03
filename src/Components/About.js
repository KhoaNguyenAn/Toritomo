import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          An innovative services platform!
        </h1>
        <p className="primary-text">
          Emerging trends suggest that the younger generation seeks alternative ways to exchange services beyond traditional monetary systems.
          Instead of solely relying on money, we believe in fostering a service-based exchange system among young people, better unlocking their potential.

        </p>
        <p className="primary-text">
          Our success depends on the spirit of deep collaboration within a local community of diverse individuals determined to make the world and each other better every day.
        </p>
        <div className="about-buttons-container">
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

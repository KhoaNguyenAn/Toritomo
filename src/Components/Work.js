import React from "react";
import skill from "../Assets/ability.png";
import swipe from "../Assets/swipe-right.gif";
import match from "../Assets/match.gif";

const Work = () => {
  const workInfoData = [
    {
      image: skill,
      title: "Expose your skills",
      text: "Let the world know what you have on offer.",
    },
    {
      image: swipe,
      title: "Swipe to match the service you prefer",
      text: "Need Anything? Swipe Hard.",
    },
    {
      image: match,
      title: "Match !",
      text: "Begin to help teh community by helping each other.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          With 3 easy steps, you can get started!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

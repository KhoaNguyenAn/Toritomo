import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCard.css";

const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hank", "Ivy", "Jack", "Karen", "Leo", "Mia", "Nathan", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tom"];

const skills = ["Web Development", "Graphic Design", "Data Analysis", "Photography", "Fitness Training", "Video Editing", "Marketing", "Language Tutoring", "Mobile App Development", "Content Writing", "Social Media Management", "UI/UX Design", "Event Planning", "SEO Optimization", "Culinary Arts", "Copywriting", "Digital Illustration", "E-commerce Consulting", "Interior Design", "Virtual Assistance"];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const generateRandomPerson = () => {
  const name = getRandomElement(names);
  const skillsCount = Math.floor(Math.random() * 2) + 2; 
  const personSkills = Array.from({ length: skillsCount }, () => getRandomElement(skills));
  const imageUrl = `https://source.unsplash.com/200x200/?portrait,${name}`;

  return {
    name,
    skills: personSkills,
    url: imageUrl,
  };
};

const generatePeople = (count) => {
  const people = [];
  for (let i = 0; i < count; i++) {
    people.push(generateRandomPerson());
  }
  return people;
};

function TinderCards() {
  const [people, setPeople] = useState(generatePeople(20));

  const swiped = (direction, nameToDelete) => {
    console.log(`I'm in swiped`, nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`Enough tinder today`);
  };

  return (
    <div className="tinderCard_container">
      {people.map((person, index) => (
        <TinderCard
          key={index}
          className="swipe"
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div className="card">
            <div
              className="relative w-full max-w-xl h-96 bg-cover bg-center rounded-md overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-lg font-bold mb-2">{person.name}</h3>
                <div className="text-white">
                  {person.skills.map((skill, skillIndex) => (
                    <p key={skillIndex} className="mb-1">{skill}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;

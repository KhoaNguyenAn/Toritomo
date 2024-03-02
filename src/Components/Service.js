import TinderCard from 'react-tinder-card'
import {useEffect, useState} from 'react'
import ChatContainer from './ChatContainer';

const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hank", "Ivy", "Jack", "Karen", "Leo", "Mia", "Nathan", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tom"];

const skills = ["Web Development", "Graphic Design", "Data Analysis", "Photography", "Fitness Training", "Video Editing", "Marketing", "Language Tutoring", "Mobile App Development", "Content Writing", "Social Media Management", "UI/UX Design", "Event Planning", "SEO Optimization", "Culinary Arts", "Copywriting", "Digital Illustration", "E-commerce Consulting", "Interior Design", "Virtual Assistance"];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const generateRandomPerson = () => {
  const name = getRandomElement(names);
  const skillsCount = Math.floor(Math.random() * 2) + 2; 
  const personSkills = Array.from({ length: skillsCount }, () => getRandomElement(skills));
  const imageUrl = `https://source.unsplash.com/400x400/?portrait,${name}`;

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

const Service = () => {
  const [genderedUsers, setGenderedUsers] = useState(generatePeople(20));
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, swipedUserId) => {
      if (direction === 'right') {
          console.log("swipe right");
      }
      setLastDirection(direction);
  };

  const outOfFrame = (name) => {
      console.log(name + ' left the screen!');
  };

  return (
      <div className="Service">
          <ChatContainer />
          <div className="swipe-container">
              <div className="card-container">
                  {genderedUsers?.map((genderedUser) => (
                      <TinderCard
                          className="swipe mb-6 w-96"
                          key={genderedUser.name}
                          onSwipe={(dir) => swiped(dir, genderedUser.name)}
                          onCardLeftScreen={() => outOfFrame(genderedUser.name)}
                      >
                          <div className="card bg-white shadow-lg p-4 rounded-md flex items-center">
                              <div className="image-container w-5/6 bg-cover bg-center h-full" style={{ backgroundImage: "url(" + genderedUser.url + ")" }}>
                                  <h3 className="text-white text-lg font-bold p-4 bg-gray-900 bg-opacity-50">{genderedUser.name}</h3>
                              </div>
                              <div className="skills-container ml-4 w-1/2">
                                  <h4 className="text-lg font-bold mb-2">Skills:</h4>
                                  <ul>
                                      {genderedUser.skills.map((skill, index) => (
                                          <li key={index} className="text-gray-700">{skill}</li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </TinderCard>
                  ))}
                  <div className="swipe-info">
                      {lastDirection ? <p className="text-gray-500">You swiped {lastDirection}</p> : <p />}
                  </div>
              </div>
          </div>
      </div>
  );
};
export default Service

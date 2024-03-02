import TinderCard from 'react-tinder-card'
import {useEffect, useState} from 'react'
import ChatContainer from './ChatContainer';
import WebsiteBuilder from '../Assets/website-builder.gif'
import CongratulationGif from '../Assets/matchprofile.gif'

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
const placeholderImageURL = "https://source.unsplash.com/400x400/?placeholder";

const Service = () => {
  const [genderedUsers, setGenderedUsers] = useState(generatePeople(20));
  const [lastDirection, setLastDirection] = useState();
  const [selectedUserSkills, setSelectedUserSkills] = useState([]);
  const [congratulationUser, setCongratulationUser] = useState(null);


  const [showSkillsPrompt, setShowSkillsPrompt] = useState(false);

  const handleIconClick = (userSkills) => {
    setSelectedUserSkills(userSkills);
    setShowSkillsPrompt(true);
  };

  const handleClosePrompt = () => {
    setShowSkillsPrompt(false);
  };

  const swiped = (direction, swipedUserId) => {
      if (direction === 'right') {
          console.log("swipe right");
          if (['Alice', 'Bob', 'David', 'Ivy'].includes(swipedUserId)) {
            setCongratulationUser(swipedUserId);
          }
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
                                <div className="icon-container absolute top-2 right-0 cursor-pointer" onClick={() => handleIconClick(genderedUser.skills)}>
                                  <img
                                    src={WebsiteBuilder}
                                    alt="Skills Icon"
                                    className="w-20 h-20"
                                  />
                                </div>
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

          {congratulationUser && (
            <div className="congratulation-prompt fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
              <div className="rounded-lg overflow-hidden">
                <img src={CongratulationGif} alt="Congratulation Gif" className="w-96 h-96 rounded" />
              </div>
              <h2 className="text-white font-bold text-3xl absolute bottom-12">It is a match, {congratulationUser}!</h2>
            </div>
          )}

          {showSkillsPrompt && (
            <div className="skills-prompt fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
              <div className="prompt-container bg-white p-8 rounded-md">
                <h2 className="text-lg font-bold mb-4">Skills show up:</h2>
                <div className="flex">
                  {selectedUserSkills.map((skill, index) => (
                    <img
                      key={index}
                      src={`${placeholderImageURL}&text=${skill}`}
                      alt={`Skill ${index + 1}`}
                      className="w-200 h-250 mr-4"
                    />
                  ))}
                </div>
                <button
                  className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md"
                  onClick={handleClosePrompt}
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </div>
  );
};
export default Service

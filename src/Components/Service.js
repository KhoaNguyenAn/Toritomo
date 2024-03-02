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
    const [genderedUsers, setGenderedUsers] = useState(generatePeople(20))
    const [lastDirection, setLastDirection] = useState()


    const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {
            console.log("swipe right")
        }
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        
            <div className="Service">
                <ChatContainer/>
                <div className="swipe-container">
                    <div className="card-container">

                        {genderedUsers?.map((genderedUser) =>
                            <TinderCard
                                className="swipe"
                                key={genderedUser.name}
                                onSwipe={(dir) => swiped(dir, genderedUser.name)}
                                onCardLeftScreen={() => outOfFrame(genderedUser.name)}>
                                <div
                                    style={{backgroundImage: "url(" + genderedUser.url + ")"}}
                                    className="card">
                                    <h3>{genderedUser.name}</h3>
                                </div>
                            </TinderCard>
                        )}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default Service

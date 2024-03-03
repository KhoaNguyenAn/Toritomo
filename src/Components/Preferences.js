import React, { useState } from "react";
import { useNavigate } from 'react-router';
import axios from 'axios';
import BannerBackground from "../Assets/home-banner-background.png";
import { getDatabase, ref, set, child, onValue, get } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import '../App.css';
import './Preferences.css';
import { useLocation } from 'react-router-dom';

function Preferences() {
  const location = useLocation();
  let username = location.state.mydata;;
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  const dbRef = ref(db)
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [checklistItems, setChecklistItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "I am a service generation assitant, given a paragraph about skills and services that a person is looking about, I will tell them potential services which match their description. I will not suggest consulting services even if they seem appropriate." },
            { role: "user", content: "I am looking for someone to help repair my car" },
            { role: "assistant", content: "Mechanical Repairman, Repairman, Hardware Skills, Towing, DIY Mechanical Engineer" },
            { role: "user", content: "I am struggling to come up with ideas for a video, and I am not that great at video editing." },
            { role: "assistant", content: "Video Editing, Content Creation, Art Direction, Creative Direction" },
            { role: "user", content: "I would love to eat healthy, but I currently don't have the skills nor knowledge to do so." },
            { role: "assistant", content: "Personal Chef, Nutritional Dietitian, Cooking CLasses, Life Coach Sessions" },
            { role: "user", content: "I am trying to learn new skills and improve my grades. Some things I would love to get into are Yoga, Bouldering and making clothing." },
            { role: "assistant", content: "Tutoring Services, Yoga Workshops, Bouldering Classes, Sewing Workshops" },
            { role: "user", content: inputText }],
          max_tokens: 200,
          n: 1,
          stop: null,
          temperature: 0,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + "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",
          },
        });
      //console.log(response)
      const data = await response['data']['choices'][0]['message']['content'];
      processApiResponse(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };


  const processApiResponse = (responseText) => {
    const items = responseText.split(",");
    setChecklistItems(items);
    setIsSubmitted(true); // Set submit state to true
  };

  // handle input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  function handleClick() {
    navigate("/Service", { state: { mydata: username } });
  }

  // render checklist items
  const renderChecklistItems = () => {
    return checklistItems.map((item, index) => (
      <div key={index}>
        <input type="checkbox" id={`checklist-item-${index}`} />
        <label htmlFor={`checklist-item-${index}`}>{item.trim()}</label>
      </div>
    ));
  };

  // Getting the user from FireBase
  const handleUpdateUser = async (checklist) => {
    await updateUser(username, checklist);
  }

  const updateUser = async (username, checklist) => {
    // Reference the field in database we are changing
    const servicesRef = ref(db, 'users/' + username + '/services');

    // Add services
    const updatedServices = checklist;

    // Update the user's services in the database
    await set(servicesRef, updatedServices);
  };


  function handleClick() {
    // alert("Username: " + username + " Password: " + password);
    navigate("/Service", { state: { mydata: username } });
  }
  const handleDoneClick = () => {
    // Call handleUpdateUser with necessary arguments
    handleUpdateUser("username", checklistItems);

    // Then call handleClick
    handleClick();
  };

  // original html
  return (
    <div className="full-screen-container">


      <div className="profile-section-top">
        <h1 className="preferences-primary-heading">What are you looking for?</h1>
        <p className="preferences-sub-heading">
          What services could improve your life right now?
        </p>
        <textarea className="input-text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="What you're looking for..."
        />
        <button onClick={handleSendMessage}>Submit</button>
        {isSubmitted && (
          <div className="checklist-wrapper">
            <h2>Select what applies to you:</h2>
            {renderChecklistItems()}
            <button onClick={handleDoneClick}>Done</button>
          </div>
        )}
      </div>


    </div>
  );
};

export default Preferences;

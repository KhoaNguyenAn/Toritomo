import React, { useState } from "react";
import { useNavigate } from 'react-router';
import axios from 'axios';
//import {handler} from "AI/openai_prompt";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import '../App.css'

function Profile() {
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
            { role: "system", content: "I am a service generation assitant, given a paragraph about a uni student, I will tell them potential services which they can offer to their community. I will not suggest consulting services even if they seem appropriate." },
            { role: "user", content: "I am a 19 year old university student who is studying a double degree of Electrical and Computer Systems engineering with commerce majoring in management studies, I like to play piano, I have been coding in python since i was 12 years old. I like to make instant ramen and go to the gym. I also like to write stories and am pretty good with debugging computer related issues. I know lots about cars and have an interest in using photoshop to edit photos to make them look better on social media" },
            { role: "assistant", content: "Tutoring, Computer Repair and Tech Support, Piano Lessons, Fitness Training, Storytelling Workshops, Photoshop Workshops, Automotive Workshops, Freelance Coding" },
            { role: "user", content: "I'm a 20 year old girl studying Computer Science and Electrical Engineering. My hobbies include aerial hoop and bouldering, and I love building things. I own a 3D printer and sewing machine and love to build wearable art in my free time. I consider myself quite studious and my favourite subject is algorithms." },
            { role: "assistant", content: "Aerial Hoop and Bouldering Classes, 3D Printing Workshops, Sewing and Wearable Art Workshops, Algorithm Tutoring, STEM Education Workshops, DIY Electronics Workshops, Coding Bootcamps" },
            { role: "user", content: "I'm a 22 year old postgrad studying a Master's of AI at Monash University. I love to make things, and have recently gotten into sewing clothing and forging jewellery. I have some experience in python and pytorch, and have worked on a couple of AI projecs during my time at uni. I also love to teach others, and have an interest in tutoring students." },
            { role: "assistant", content: "Sewing and Clothing Making Workshops, Jewelry Making Workshops, Python and Pytorch Tutoring, STEM Education Workshops, Coding Bootcamps, Tutoring Services" },
            { role: "user", content: "I’m Sienna I’m 20 years old studying at Monash University, doing a degree in Commerce majoring in finance. I love listening to music, going roller skating and drinking coffee. My favourite time of the week is Friday movie nights with my family. I like cooking, doing yoga and binge watching shows. I read a lot of news and know a lot about what’s going on around the world which i personally think keeps life interesting. My favourite quote is “live laugh love” - simple but very important." },
            { role: "assistant", content: "Financial Planning Workshops, Roller Skating Classes, Coffee Tasting Events, Cooking Classes, Yoga Workshops, Movie Night Hosting, News Analysis Blog, Wellness Retreats, Mindfulness Workshops" },
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
    navigate("/Preferences");
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

  // original html
  return (
    <div className="full-screen-container">

      <div className="profile-section-top">
        <h1 className="primary-heading">Tell us about yourself!</h1>
        <p className="primary-text">
          Who are you? What do you do?
        </p>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="All about you..."
        />
        <button onClick={handleSendMessage}>Submit</button>

        {isSubmitted && (
          <div className="checklist-wrapper">
            <h2>Select what applies to you:</h2>
            {renderChecklistItems()}
            <button onClick={handleClick}>Done</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Profile;

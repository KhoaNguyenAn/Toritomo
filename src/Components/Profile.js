import React, { useState } from "react";
//import {handler} from "AI/openai_prompt";

function Profile() {
  const [inputText, setInputText] = useState("");
  const [checklistItems, setChecklistItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchApiResponse = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {"role": "user", "content": inputText},
          ]
        }),
      });
  
      if (!response.ok) {
      }
  
      const data = await response.json();
      processApiResponse(data.answer); 
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
    <div className="profile-section-wrapper">
      <div className="profile-section-top">
        <h1 className="primary-heading">Tell us about yourself!</h1>
        <p className="primary-text">
          Don't hold back! We'd love to hear all about how awesome you are!
        </p>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Skillss you can offer..."
        />
        <button onClick={fetchApiResponse}>Submit</button>
      </div>
      {isSubmitted && (
        <div className="checklist-wrapper">
          <h2>Select what applies to you:</h2>
          {renderChecklistItems()}
          <button onClick={() => alert("Done!")}>Done</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

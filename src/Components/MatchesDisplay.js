import React, { useEffect, useState } from "react";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [filteredMatchedProfiles, setFilteredMatchedProfiles] = useState([]);

  // Function to generate dummy data
  const generateDummyData = () => {
    const dummyData = [];
    for (let i = 1; i <= 5; i++) {
      dummyData.push({
        id: i,
        first_name: `User ${i}`,
        url: `https://placekitten.com/200/200?image=${i}`, // Replace with your image URL logic
        // Add more properties as needed
      });
    }
    return dummyData;
  };

  useEffect(() => {
    // Set filteredMatchedProfiles with dummy data
    setFilteredMatchedProfiles(generateDummyData());
  }, []);

  return (
    <div className="matches-display">
      {filteredMatchedProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.first_name + " profile"} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;

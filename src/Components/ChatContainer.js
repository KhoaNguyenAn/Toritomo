import React from 'react';
import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';
import ChatDisplay from './ChatDisplay';
import { useState } from 'react';

const generateDummyUser = (id, name) => {
  return {
    user_id: id,
    first_name: name,
    matches: [], // Dummy data for matches
    url: `https://source.unsplash.com/200x200/?portrait,${name}`, // Dummy image URL
  };
};

const generateDummyUsers = (count) => {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push(generateDummyUser(i, `User${i}`));
  }
  return users;
};

const ChatContainer = () => {
  const [user] = useState(generateDummyUser(1, 'John')); // Generate a dummy user
  const [clickedUser, setClickedUser] = useState(null);

  // Generate dummy data for matches
  const dummyMatches = generateDummyUsers(5);

  // Generate dummy data for clicked user
  const dummyClickedUser = clickedUser ? generateDummyUser(clickedUser.user_id, clickedUser.first_name) : null;

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        <button className="option" onClick={() => setClickedUser(null)}>
          Matches
        </button>
        <button className="option" disabled={!clickedUser}>
          Chat
        </button>
      </div>

      {!clickedUser && <MatchesDisplay matches={dummyMatches} setClickedUser={setClickedUser} />}

      {clickedUser && <ChatDisplay user={user} clickedUser={dummyClickedUser} />}
    </div>
  );
};

export default ChatContainer;

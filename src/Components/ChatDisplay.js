import Chat from './Chat';
import ChatInput from './ChatInput';
import { useState, useEffect } from 'react';

const ChatDisplay = ({ user, clickedUser }) => {
  const [messages, setMessages] = useState([]);

  // Dummy data for demonstration
  useEffect(() => {
    const dummyMessages = [
      {
        name: user?.first_name,
        img: user?.url,
        message: 'Hello there!',
        timestamp: '2022-03-03T12:00:00Z',
      },
      {
        name: clickedUser?.first_name,
        img: clickedUser?.url,
        message: 'Hi! How are you?',
        timestamp: '2022-03-03T12:05:00Z',
      },
      // Add more dummy messages as needed
    ];

    setMessages(dummyMessages);
  }, [user, clickedUser]);

  return (
    <>
      <Chat descendingOrderMessages={messages} />
      <ChatInput user={user} clickedUser={clickedUser} />
    </>
  );
};

export default ChatDisplay;

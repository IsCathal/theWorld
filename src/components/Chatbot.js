// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Create a CSS file for styles

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user's message
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      // Simulate a bot response
      setTimeout(() => {
        const botMessage = { sender: 'bot', text: 'This is a response from your chatbot!' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);

      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => { if (e.key === 'Enter') handleSend(); }}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;

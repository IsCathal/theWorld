// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

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
      {/* Main chat window */}
      <div className="chat-window">
        {/* Optional heading or any top content */}
        <h2>Chat Window</h2>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input area at the bottom */}
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;

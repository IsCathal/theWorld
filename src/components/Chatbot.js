// src/components/Chatbot.js
import React, { useState } from 'react';
import { runLLM } from '../llm'; // Importing runLLM from llm.ts
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      // Add user's message
      const userMessage = { sender: 'user', text: input };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      // Fetch response from LLM
      try {
        const botResponse = await runLLM({ userMessage: input });
        const botMessage = { sender: 'bot', text: botResponse };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error fetching response from LLM:', error);
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'Error getting response. Try again!' }]);
      }

      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      {/* Main chat window */}
      <div className="chat-window">
        <h2>Chat Window</h2>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input area */}
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

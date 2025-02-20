import React, { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";


const Chat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([{ text: "Hi! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const rules = {
    hello: "Hello! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "what is your name": "I'm an AI assistant here to assist you.",
    "what can you do": "I can answer questions, provide guidance, and assist with issues!",
    help: "Sure! Let me know what you need help with.",
    bye: "Goodbye! Have a great day!",
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse =
      rules[input.toLowerCase()] || "I'm not sure about that. Can you rephrase?";
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="chat-modal">
      <div className="chat-header">
        <span>Chatbot</span>
        <button className="close-chat-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chat;

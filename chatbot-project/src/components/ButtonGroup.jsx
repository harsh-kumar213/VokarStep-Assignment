import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

import '../styles/Buttons.css'

const ButtonGroup = ({ isChatActive, setIsChatActive, activeTab, setActiveTab }) => {
  const buttons = [
    { id: "call", icon: <FaPhoneAlt />, label: "Call" },
    { id: "screenshare", icon: <MdScreenShare />, label: "Screen Share" },
    { id: "chat", icon: <BsChatDots />, label: "Chat" },
  ];

  return (
    <div className="button-container">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={`btn ${activeTab === btn.id && btn.id !== "chat" ? "active-btn" : ""}`}
          onClick={() => {
            if (btn.id === "chat") {
              setIsChatActive(true); // Open Chat Modal
            } else {
              setActiveTab(btn.id); // Change active tab (Call/Screen Share)
            }
          }}
        >
          <div className="icon">{btn.icon}</div>
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

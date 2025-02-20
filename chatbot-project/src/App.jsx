import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import ButtonGroup from "./components/ButtonGroup.jsx";
import ScreenShare from "./components/ScreenShare.jsx";
import Chat from "./components/Chat.jsx"; // Import Chat Modal
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState("call");
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <>
      <Navbar />
      {activeTab === "call" && <Home />}
      {activeTab === "screenshare" && <ScreenShare />}

      {/* Chat Modal (Independent from Tabs) */}
      {isChatActive && <Chat isOpen={isChatActive} onClose={() => setIsChatActive(false)} />}

      <div className="button-group-container">
        <ButtonGroup
          isChatActive={isChatActive}
          setIsChatActive={setIsChatActive}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </>
  );
};

export default App;

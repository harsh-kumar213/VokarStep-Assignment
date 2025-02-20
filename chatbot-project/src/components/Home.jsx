import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import '../styles/Home.css'

const Home = () => {
  
  const [circleSize, setCircleSize] = useState(150);
  const [isMicActive, setIsMicActive] = useState(false);

  
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    let interval;
    if (isMicActive) {
      SpeechRecognition.startListening({ continuous: true, language: "en-US" });

      
      interval = setInterval(() => {
        const randomVolume = Math.random(); 
        setCircleSize(150 + randomVolume * 100);
      }, 300);
    } else {
      SpeechRecognition.stopListening();
      setCircleSize(150);
    }

    return () => clearInterval(interval);
  }, [isMicActive]);

  
  const toggleMic = () => {
    setIsMicActive((prev) => !prev);
  };

  return (
    <>
   
    <div className="home-container">
    
      <div className="services">
         <p>General Advisor</p>
         <p>Workflow</p>
         <p>Technical issue</p>
         <p>Others</p>
      </div>
     
       <h1>Click the mic before speaking</h1>
      <div className="mic-section">
        
       
        <div
          className={`mic-circle ${isMicActive ? "active" : ""}`}
          style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
          onClick={toggleMic}
        >
          <div className="mic-icon"><FaMicrophone/></div>
        </div>
      </div>

      
      
    </div>
    </>
  );
};

export default Home;

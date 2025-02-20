import React, { useState, useRef } from "react";
import { FaTimes, FaDesktop } from "react-icons/fa";

import '../styles/ScreenShare.css'

const ScreenShare = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false,
      });
      setStream(screenStream);
      if (videoRef.current) {
        videoRef.current.srcObject = screenStream;
      }
    } catch (error) {
      console.error("Error starting screen share:", error);
    }
  };

  const stopScreenShare = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  return (
    <div className="screen-share-container">
      <div className="screen-share-box" onClick={!stream ? startScreenShare : undefined}>
        {stream ? (
          <>
            <video ref={videoRef} autoPlay playsInline className="screen-video" />
            <button className="close-btn" onClick={stopScreenShare}>
              <FaTimes />
            </button>
          </>
        ) : (
          <div className="placeholder">
            <FaDesktop className="screen-icon" />
            <p>Your screen will be shared</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenShare;

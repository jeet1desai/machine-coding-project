import React from "react";
import VideoStream from "./VideoStream";
import LiveChat from "./LiveChat";

const RealTime = () => {
  return (
    <div className="real-time">
      <VideoStream />
      <LiveChat />
    </div>
  );
};

export default RealTime;

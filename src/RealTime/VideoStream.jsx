import React from "react";

const VideoStream = () => {
  return (
    <div>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/Nq2wYlWFucg"
        title="Video Stream"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoStream;

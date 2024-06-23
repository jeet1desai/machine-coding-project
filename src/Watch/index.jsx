import React, { useRef, useState } from "react";

const Watch = () => {
  const [time, setTime] = useState(0);

  const timerId = useRef();

  const start = () => {
    timerId.current = setInterval(() => {
      console.log(time, "time");
      setTime((time) => time + 1);
    }, 1000);
  };

  // useCallback
  const resume = () => {
    clearInterval(timerId.current);
    start();
  };

  const stop = () => {
    clearInterval(timerId.current);
  };

  const reset = () => {
    setTime(0);
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h1>{time}</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => start()}>Start</button>
        <button onClick={() => stop()}>Stop</button>
        <button onClick={() => resume()}>Resume</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
};

export default Watch;

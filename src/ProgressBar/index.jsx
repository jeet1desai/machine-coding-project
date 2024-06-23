import React, { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  let timer = useRef();
  let timerRef = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((t) => t + 1);
      timerRef.current += 1;
      if (timerRef.current === 100) {
        clearInterval(timer.current);
      }
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ transform: `translate(${progress - 100}%)` }}></div>
    </div>
  );
};

export default ProgressBar;

import React, { useEffect, useState } from "react";

const CustomHook = () => {
  const [toggle, setToggle] = useHandleToggle(true);
  return (
    <div>
      <p>{toggle ? "Yes" : "No"}</p>
      <button onClick={() => setToggle((tgl) => !tgl)}>Toggle</button>
    </div>
  );
};

const useHandleToggle = (props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(props);
  }, []);

  return [toggle, setToggle];
};

export default CustomHook;

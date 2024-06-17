import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "./store";

const StateManagement = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button>{value}</button>
      <button onClick={() => dispatch(decremented())}>-</button>
    </div>
  );
};

export default StateManagement;

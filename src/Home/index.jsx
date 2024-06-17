import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h4>Machine Coding Project</h4>
      <ul>
        <li>
          <Link to="/state-management">State Management</Link>
        </li>
        <li>
          <Link to="/infinite-scroll">Infinite Scroll</Link>
        </li>
        <li>
          <Link to="/nested-list">Nested List</Link>
        </li>
        <li>
          <Link to="/image-slider">Image Slider</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;

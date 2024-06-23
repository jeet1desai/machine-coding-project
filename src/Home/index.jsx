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
          <Link to="/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/live-chat">Yt Live Chat (RealTime)</Link>
        </li>
        <li>
          <Link to="/auto-complete-search">Auto Complete Search</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban</Link>
        </li>
        <li>
          <Link to="/watch">Watch - Timer</Link>
        </li>
        <li>
          <Link to="/custom-hook">Custom Hook</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;

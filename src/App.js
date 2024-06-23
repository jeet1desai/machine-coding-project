import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import StateManagement from "./StateManagement";
import InfiniteScroll from "./InfiniteScroll";
import Accordion from "./Accordion";
import NestedList from "./NestedList";
import ImageSlider from "./ImageSlider";
import Pagination from "./Pagination";
import AutoCompleteSearch from "./AutoCompleteSearch";
import RealTime from "./RealTime";
import CustomHook from "./CustomHook";
import Kanban from "./Kanbans";
import Watch from "./Watch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/state-management" element={<StateManagement />}></Route>
        <Route path="/infinite-scroll" element={<InfiniteScroll />}></Route>
        <Route path="/accordion" element={<Accordion />}></Route>
        <Route path="/pagination" element={<Pagination />}></Route>
        <Route path="/auto-complete-search" element={<AutoCompleteSearch />}></Route>
        <Route path="/image-slider" element={<ImageSlider />}></Route>
        <Route path="/nested-list" element={<NestedList />}></Route>
        <Route path="/live-chat" element={<RealTime />}></Route>
        <Route path="/custom-hook" element={<CustomHook />}></Route>
        <Route path="/kanban" element={<Kanban />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import userData from "../userData.json";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % userData.length);
  };

  const handlePrev = () => {
    setCount(
      (prevCount) => (prevCount - 1 + userData.length) % userData.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={handlePrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <Carousel data={userData[count]} />
      <button className="carousel-button" onClick={handleNext}>
      <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default App;

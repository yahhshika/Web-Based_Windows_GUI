import { useState, useRef } from "react";
import TaskBar from "./components/TaskBar";
import "./App.css";

function App() {
  let temp = useRef();
  let cursor = useRef({ dom: null, x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    // OndragStart
    cursor = {
      dom: e.target,
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleDrop = (e) => {
    //  Ondrop
    e.preventDefault();
    if (cursor.dom == null) return;
    let toMoveX = e.clientX - cursor.x;
    let toMoveY = e.clientY - cursor.y;
    let distance = {
      x: Math.round(toMoveX / 100) * 100,
      y: Math.round(toMoveY / 100) * 100,
    };
    temp.current.style.left = position.x + distance.x + "px";
    temp.current.style.top = position.y + distance.y + "px";
    setPosition({ x: position.x + distance.x, y: position.y + distance.y });
  };

  // Right Click Functionality
  let set;
  const TwoSecVisiblity = (element) => {
    element.style.visibility = "visible";
    clearTimeout(set);
    set = setTimeout(() => {
      element.style.visibility = "hidden";
    }, 2000);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("desktop")) {
      let Cmenu = document.querySelector(".contextMenu");
      // TwoSecVisiblity(Cmenu);
      console.log(Cmenu, e.clientX, e.clientY);
      Cmenu.style.display = "flex";
      Cmenu.style.left = e.clientX + "px";
      Cmenu.style.top = e.clientY + "px";
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("desktop")) {
      let Cmenu = document.querySelector(".contextMenu");
      Cmenu.style.display = "none";
    }
  };

  return (
    <>
      <div
        className="desktop"
        onContextMenu={handleRightClick}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="contextMenu">
          <ul>
            <li>
              <span>svg view</span>
              <span>{">"}</span>
            </li>
            <li>
              <span>svg sort by</span>
              <span>{">"}</span>
            </li>
            <li>
              <span>svg Refresh</span>
              <span>{">"}</span>
            </li>
            <li>
              <span>svg New</span>
              <span>{">"}</span>
            </li>
            <li>
              <span>svg open Terminal</span>
              <span>{">"}</span>
            </li>
          </ul>
        </div>
        <div
          className="icon"
          ref={temp}
          draggable
          onDragStart={handleDragStart}
        >
          122
        </div>
        <div
          className="icon"
          ref={temp}
          draggable
          onDragStart={handleDragStart}
        >
          455
        </div>
        <div
          className="icon"
          ref={temp}
          draggable
          onDragStart={handleDragStart}
        >
          6777
        </div>
        <div
          className="icon"
          ref={temp}
          draggable
          onDragStart={handleDragStart}
        >
          9000
        </div>
        <TaskBar />
      </div>
    </>
  );
}

export default App;

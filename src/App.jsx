// import { useState, useRef } from "react";
import TaskBar from "./components/TaskBar";
import "./App.css";
import AppIcon from "./components/AppIcon";
import bg from "./assets/bg.png";

function App() {
  // Right Click Functionality

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
        // onDragOver={(e) => e.preventDefault()}
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
        <AppIcon size={80} Name="calulator" />
        <AppIcon size={80} Name="notepad" />
        <AppIcon size={80} Name="chrome browser" />
        <AppIcon size={80} Name="New folder" />

        <TaskBar />
      </div>
    </>
  );
}

export default App;

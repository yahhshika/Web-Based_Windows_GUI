import React from "react";
import "./TaskBar.css";
import AppIcon from "./AppIcon";

const TaskBar = () => {
  return (
    <footer>
      <div className="taskbar">
        <div className="weather">weather</div>
        <div className="appicon">
          <AppIcon size={50} />
          <AppIcon size={50} />
          <AppIcon size={50} />
          <AppIcon size={50} />
          <AppIcon size={50} />
          <AppIcon size={50} />
          <AppIcon size={50} />
          <AppIcon size={50} />
        </div>
        <div className="clock">clock and notification</div>
      </div>
    </footer>
  );
};

export default TaskBar;

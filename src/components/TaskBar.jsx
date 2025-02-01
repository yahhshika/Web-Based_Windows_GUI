import React from "react";
import "./TaskBar.css";
const TaskBar = () => {
  return (
    <footer>
      <div className="taskbar">
        <div className="weather">weather</div>
        <div className="appicon">apps</div>
        <div className="clock">clock and notification</div>
      </div>
    </footer>
  );
};

export default TaskBar;

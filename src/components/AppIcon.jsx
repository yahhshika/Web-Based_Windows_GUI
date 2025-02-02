import React, { useRef, useState } from "react";
import "./AppIcon.css";

const AppIcon = ({ size, Name }) => {
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

  const handleDragEnd = (e) => {
    //  Ondrop
    // e.preventDefault();
    if (cursor.dom == null) return;
    let toMoveX = e.clientX - cursor.x;
    let toMoveY = e.clientY - cursor.y;
    let distance = {
      x: Math.round(toMoveX / size) * size,
      y: Math.round(toMoveY / size) * size,
    };
    temp.current.style.left = position.x + distance.x + "px";
    temp.current.style.top = position.y + distance.y + "px";
    setPosition({ x: position.x + distance.x, y: position.y + distance.y });
  };

  return (
    <div
      className="icon"
      style={{ width: size, height: size }}
      ref={temp}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div
        className="appSvg"
        style={{ width: size - size / 5, height: size - size / 5 }}
      ></div>
      <div className="appName">{Name}</div>
    </div>
  );
};

export default AppIcon;

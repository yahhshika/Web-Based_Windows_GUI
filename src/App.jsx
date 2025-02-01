import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let temp 
    const onDragStart = (e) => {
      // console.log("dragged")
      temp = e.target.closest(".icon")
      console.log(temp)
    }

    const onDragEnter = (e) => {
      // console.log("valid area")
    }
    const onDragOver = (e) => {
      // console.log("over valid dropable area area")
    }
    const onDragLeave = (e) => {
      // console.log("leaving area")
    }
    const onDrop = (e) => {
      // e.target.style.top = "40px"
      // console.log(e.target)
    }
    const onDragEnd =(e , temp) => {
      // console.log("drag ended")
      console.log(temp)
       
    }


  return (
    <>
    <div className="desktop">
      <div className="icon" draggable  onDragStart={onDragStart} onDragEnter={onDragEnter} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} onDragEnd={onDragEnd}></div>
    <footer>
      <div className="taskbar">
        //weather section
        <div className="weather"></div>
        // appicon section
        <div className="appicon"></div>
        // clock and notification section
        <div className="clock">clock and notification</div>

      </div>
    </footer>
    </div>
    </>
  )
}

export default App

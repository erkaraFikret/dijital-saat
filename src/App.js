import React, { useState } from 'react'
import './App.css';
import 'animate.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrrentTime] = useState(time);

  function Time(){
    let time = new Date().toLocaleTimeString();
    setCurrrentTime(time)
  }
  setInterval(Time, 1000);
  return (
    <div className="App">
        <h1 class="animate__animated animate__backInDown">{currentTime}</h1>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const purple = "pink";

  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('click me')

  const bgchange = () => {
    let newBg = "yellow";
    setBg(newBg)
    setName("ohhh!")
  };
  const bgBack = () =>{
    setBg(purple)
    setName("💁‍♀️")

  }
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgchange} onMouseLeave={bgBack}> {name}</button>
      </div>
    </>
  );
};

export default App;

import React ,  { useState } from 'react';


import './App.css';
import Person from './Person';


function App() {
  const [show, setShow] = useState(false);
  const tshow = () => {
    setShow (!show);
    console.log(show);
  }

    return (
    <div className="App">
      <button onClick = {tshow}>Show</button>
      {show && <Person/>}
      
    </div>
  );
}

export default App;

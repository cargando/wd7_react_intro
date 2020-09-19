import React, { useState } from 'react';
import AppClass from './components/AppClass'
import AppHook from './components/AppHook'
import './App.css';


function App() { // функциональный React-компонент

  const [live, setLive] = useState(true);

  const handleDestroyClick = () => {

    setLive(!live);

  }


  return (
    <div className="App">
      {
        live && (<AppHook />)
        // аналог   live ? (<AppHook />) : null
      }
      <br />
      <input type="button" onClick={ handleDestroyClick } value="DESTROY AppHook!!" />
    </div>
  );
}

export default App;




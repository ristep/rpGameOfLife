import React from 'react';
import Logo from './components/logoComp';
import World from './components/world';
import Seting from './seting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<World></World>
			<br /><br /><br /><br /><br />
			<Logo></Logo> 
			<br />
			<Seting></Seting>
      </header>
    </div>
  );
}

export default App;

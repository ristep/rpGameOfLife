import React from 'react';
import Logo from './components/logoComp';
import World from './components/world';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<World></World>
			<br />
			<Logo></Logo> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
				{React.version}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

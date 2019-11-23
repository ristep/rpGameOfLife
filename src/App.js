import React from 'react';
import World from './components/world';
import Seting from 'components/seting';
import { useDispatch } from "react-redux";
import { openSettingsDialog } from 'redux/actions';
import './App.css';

function App() {
	const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
			<br />
			<World></World> 
			<Seting></Seting>
			<button onClick={() => dispatch(openSettingsDialog())}>Setings</button>
      </header>
    </div>
  );
}

export default App;

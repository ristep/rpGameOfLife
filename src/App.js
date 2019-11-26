import React from 'react';
import World from './components/world';
import Seting from 'components/seting';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import AppNavBar from 'components/appNavbar';
import useInterval from 'hooks/useInterval';
import { NEXT_WORLD } from 'redux/actionTypes';
import AboutDialog from 'components/about';
import { getDelay } from 'redux/selectors';

function App() {
	const delay =  useSelector(getDelay);
	const dispatch = useDispatch();
	
	useInterval(() => {
		dispatch({type:NEXT_WORLD});
	}, delay);

  return (
    <div className="App">
      <header className="App-header">
				<AppNavBar></AppNavBar>
			<br />
      </header>
			<World></World> 
			<Seting></Seting>
			<AboutDialog />
    </div>
  );
}

export default App;

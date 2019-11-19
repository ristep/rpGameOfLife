import React, { useState, useEffect } from 'react';
//import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from "react-redux";
import { invertWorld, nextWorld } from '../redux/actions';
import  useInterval  from '../hooks/useInterval';

const Seting = () => {
	const dispatch = useDispatch();
	const [delay, setDelay] = useState(null);

	const onClickInvert = () => {
		dispatch(invertWorld())
	}

	const onClickNext = () => {
		dispatch(nextWorld());
	}

	const onClickStartStop = () => {	
		if(null===delay)
			setDelay(500);
		else
			setDelay(null);	
	}

	useInterval(() => {
			dispatch(nextWorld())
		} , delay );

	return(
		<div>
			<button onClick={onClickInvert} >Revert</button>
			<button onClick={onClickNext} >Next</button>
			<button onClick={onClickStartStop} >{delay===null?'Start':'Stop'}</button>
		</div>
	);
}

export default Seting;
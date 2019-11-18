import React, { useState } from 'react';
//import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from "react-redux";

import Cell from './cell';

const World = () => {
	const { conf } = useSelector(state => state.world);
  const dispatch = useDispatch();

	var newWorld = [];
	var kk = 0;
	for(var r = 0; r < conf.rows; r++) {
		for (var c = 0; c < conf.cols; c++){
			newWorld.push(<Cell key={(kk++).toString()} cord={{row:r, col:c}} ></Cell>);
		 }
		 newWorld.push(<br key={(kk++).toString()} />);
	 }

	return (
		<>
			{newWorld}
			{/* <ReactJson src={cells} /> */}
		</>
	);
} 

export default World;

//  newWorld.push(<Cell row={i} col={j} activ={matrix[j][i]>0}></Cell>);
// const [matrix, setMatrix] = useState(	[0,0,0,0,0, 0,0,1,1,0, 0,0,0,0,0, 0,0,0,0,0]	[0,0,0,0,0, 0,0,0,0,0]);

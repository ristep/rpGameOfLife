import React, { useState } from 'react';
//import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from "react-redux";

import Cell from './cell';

const World = () => {
	const { conf } = useSelector(state => state.world);
  const dispatch = useDispatch();

	var rendWorld = [];
	var kk = 0;
	for(var r = 1; r <= conf.rows; r++) {
		for (var c = 1; c <= conf.cols; c++){
			rendWorld.push(<Cell key={(kk++).toString()} cord={{row:r, col:c}} ></Cell>);
		 }
		 rendWorld.push(<br key={(kk++).toString()} />);
	 }

	return (
		<>
			{rendWorld}
			{/* <ReactJson src={cells} /> */}
		</>
	);
} 

export default World;

//  newWorld.push(<Cell row={i} col={j} activ={matrix[j][i]>0}></Cell>);
// const [matrix, setMatrix] = useState(	[0,0,0,0,0, 0,0,1,1,0, 0,0,0,0,0, 0,0,0,0,0]	[0,0,0,0,0, 0,0,0,0,0]);

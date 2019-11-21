import React from 'react';
//import ReactJson from 'react-json-view';
import { useSelector } from "react-redux";

import Cell from './cell';

const World = () => {
	const { conf } = useSelector(state => state.world);

	var rendWorld = [];
	var kk = 0;
	for(var r = 0; r < conf.rows; r++) {
		for (var c = 0; c < conf.cols; c++){
			rendWorld.push(<Cell key={(kk++).toString()} cord={{row:r, col:c}} ></Cell>);
		 }
		 rendWorld.push(<br key={(kk++).toString()} />);
	 }

	return (
		<div style= {{ position: 'relative', margin: "12px" }} >
			{rendWorld}
			{/* <ReactJson src={cells} /> */}
		</div>
	);
} 

export default World;
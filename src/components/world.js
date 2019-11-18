import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import {useSelector} from 'react-redux';
import Cell from './cell';

const World = () => {
	const { conf, cells } = useSelector(state => state.world);

	var newWorld = [];
	var kk = 0;
	for(var i = 0; i < conf.rows; i++) {
		for (var j = 0; j < conf.cols; j++){
			newWorld.push(<Cell key={(kk++).toString()} cord={{row:i, col:j, live:cells[i][j]}} ></Cell>);
		 }
		 newWorld.push(<br key={(kk++).toString()} />);
	 }

	return (
		<>
			{newWorld}
			<ReactJson src={cells} />
		</>
	);
} 

export default World;

//  newWorld.push(<Cell row={i} col={j} activ={matrix[j][i]>0}></Cell>);
// const [matrix, setMatrix] = useState(	[0,0,0,0,0, 0,0,1,1,0, 0,0,0,0,0, 0,0,0,0,0]	[0,0,0,0,0, 0,0,0,0,0]);

import React from 'react';
//import ReactJson from 'react-json-view';
import { useSelector } from "react-redux";
import { getWorldConf } from 'redux/reducers/world';
import Cell from '../elemens/cell';
import Logo from '../elemens/logoComp';

const World = () => {
	const { rows, colls } = useSelector(getWorldConf);

	var rendWorld = [];
	var kk = 0;
	for(var r = 0; r < rows; r++) {
		for (var c = 0; c < colls; c++){
			rendWorld.push(<Cell key={(kk++).toString()} cord={{row:r, col:c}} ></Cell>);
		 }
	 }

	return (
		<div style= {{ position: 'relative', margin: "12px" }} >
			<Logo></Logo>
			{rendWorld}
			{/* <ReactJson src={cells} /> */}
		</div>
	);
} 

export default World;
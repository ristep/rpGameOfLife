import React, { useState } from 'react';
import cell from "redApple.png";
import cellWhite from "whiteApple.png";
import { useDispatch, useSelector } from "react-redux";
import { setCell, toggleCell } from 'redux/actions';
import { CELL_SIZE } from 'setings';
import { green } from 'ansi-colors';

const Cell = (props) => {
	const cells  = useSelector( (state) => (state.world.cells));
	const { row, col } = props.cord;
  const dispatch = useDispatch();
	const live = cells[row][col];
	
	const xpos = col*(CELL_SIZE+2)+"px";
	const ypos = row*(CELL_SIZE+2)+"px"

	const liveStyle = {
		position: "absolute",
		top:ypos,
		left:xpos,
		width:CELL_SIZE,
	};

	const deadStyle = {
		position: "absolute",
		boxSizing: "border-box",
		border: "1px solid silver",
		top:ypos,
		left:xpos,
		width:CELL_SIZE+1,
		height:CELL_SIZE+1
	};
	
	// () => {
	// 	return({top:row*CELL_SIZE+"px",left:col*CELL_SIZE+"px",width:CELL_SIZE})
	// }

	const onClickHandle = () => {
		 const newCord = {row:row,col:col}
		 dispatch(toggleCell(newCord));
	};
	if(live)
		return (<img onClick={onClickHandle} style={liveStyle} src={cell} ></img> );
	else
		return (<img onClick={onClickHandle} style={deadStyle} src={cellWhite}></img> );
} 

export default Cell;
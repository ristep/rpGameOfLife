import React from 'react';
import cell from "redApple.png";
import cellWhite from "whiteApple.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleCell } from 'redux/actions';

const Cell = (props) => {
	const cells  = useSelector( (state) => (state.world.cells));
	const { cellSize } = useSelector( (state) => (state.world.conf) );
	const dispatch = useDispatch();
	
	const { row, col } = props.cord;
  const live = cells[row][col];
	
	const xpos = col*(cellSize+2)+"px";
	const ypos = row*(cellSize+2)+"px"

	const liveStyle = {
		position: "absolute",
		top:ypos,
		left:xpos,
		width:cellSize,
	};

	const deadStyle = {
		position: "absolute",
		boxSizing: "border-box",
		border: "1px solid silver",
		top:ypos,
		left:xpos,
		width:cellSize+1,
		height:cellSize+1
	};
	
	// () => {
	// 	return({top:row*CELL_SIZE+"px",left:col*CELL_SIZE+"px",width:CELL_SIZE})
	// }

	const onClickHandle = () => {
		 const newCord = {row:row,col:col}
		 dispatch(toggleCell(newCord));
	};
	if(live)
		return (<img onClick={onClickHandle} style={liveStyle} src={cell} alt=""></img> );
	else
		return (<img onClick={onClickHandle} style={deadStyle} src={cellWhite} alt=""></img> );
} 

export default Cell;
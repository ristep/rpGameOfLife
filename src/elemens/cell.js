import React from 'react';
import cell from "redApple.png";
import cellWhite from "whiteApple.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleCell } from 'redux/actions';
import { getWorldCells, getWorldConf } from 'redux/reducers/world';

const Cell = (props) => {
	const dispatch = useDispatch();
	const { cellSize } = useSelector(getWorldConf);
	const cells = useSelector((getWorldCells));
	const live = cells[props.cord.row][props.cord.col];

	const xpos = props.cord.col*(cellSize+2)+"px";
	const ypos = props.cord.row*(cellSize+2)+"px"

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
	
	const onClickHandle = () => {
		 dispatch(toggleCell(props.cord));
	};

	if(live)
		return (<img onClick={onClickHandle} style={liveStyle} src={cell} alt=""></img> );
	else
		return (<img onClick={onClickHandle} style={deadStyle} src={cellWhite} alt=""></img> );
} 

export default Cell;
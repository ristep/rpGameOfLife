import React, { useState } from 'react';
import styled from 'styled-components';
import cell from "../cell.svg";
import cellWhite from "../cellWhite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCell, toggleCell } from '../redux/actions';

const Img = styled.img`
  position: relative;
  top: 0px;
	left: 0px;	
	height: 20px;
`;

const Cell = (props) => {
	const cells  = useSelector( (state) => (state.world.cells));
	const { row, col } = props.cord;
  const dispatch = useDispatch();

	const onClickHandle = () => {
		 const newCord = {row:row,col:col,live:!cells[row][col]}
		 dispatch(setCell(newCord));
	};

	return (
		<>
			{/* {cells[10][10]} */}
			<Img onClick={onClickHandle} src={  cells[row][col] ? cell : cellWhite } alt="cell"></Img> 
		</>	
	);
} 

export default Cell;
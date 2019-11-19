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
	height: 14px;
	padding: 0;
	margin: 0;
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
		<Img onClick={onClickHandle} src={  cells[row][col]===1 ? cell : cellWhite } alt="cell"></Img> 
	);
} 

export default Cell;
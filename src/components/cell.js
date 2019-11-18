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
	const { cord, ...rest } = props;
	const [isLive, setIsLive] = useState(cord.live);
  const dispatch = useDispatch();
	
	const onClickHandle = () => {
		setIsLive(!isLive);
		var newCord = cord;
		newCord.live = isLive;
    dispatch(setCell(newCord));
	};

	return (
		<>
			{/* {row}:{col} */}
			<Img onClick={onClickHandle} src={isLive?cell:cellWhite} alt="cell"></Img> 
		</>	
	);
} 

export default Cell;
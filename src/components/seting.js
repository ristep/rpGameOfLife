import React, { useState } from 'react';
import styled from 'styled-components';

//import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from "react-redux";
import { invertWorld, nextWorld, setCellSize, closeSettingsDialog, resizeWorld } from '../redux/actions';
import useInterval from '../hooks/useInterval';
import { getSettingsDialog } from 'redux/reducers/uiState';
import Logo from './logoComp';

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.2); 
`;

const PopupInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
	background: white;
	border-radius: 6px;
	box-shadow: 10px 10px 5px rgba(9,9,9, 0.2);
`;

const TopBanner = styled.div`
	position: relative;
	height: 50px;
	line-height:50px;
	text-align: center;
	text-shadow: 20px;
	font-size: 26px;
	color: white;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	background-color: #94A74D;
`;

const Body = styled.div`
	height: fit-content;
	background-color: rgb(225,225,225);
	display: contents;
	height:100%;
`;

const BottomBanner = styled(TopBanner)`
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	width:100%;
  height:50px;
  background-color:#94A74D;
  position:absolute;
  bottom:0px;
	`;

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;
	border-radius:6px;
	&:hover{ 
		box-shadow: 0 2px 6px 0 rgba(0,0,0,0.24),0 7px 15px 0 rgba(0,0,0,0.19);
	}	
`;

const Seting = () => {
	const dispatch = useDispatch();
	const settingsDialog  = useSelector(getSettingsDialog);
	const [delay, setDelay] = useState(null);

	const onClickInvert = () => {
		dispatch(invertWorld())
	}

	const onClickNext = () => {
		dispatch(nextWorld());
	}

	const onClickStartStop = () => {
		if (null === delay)
			setDelay(500);
		else
			setDelay(null);
	}

	useInterval(() => {
		dispatch(nextWorld())
	}, delay);

	if (settingsDialog)
		return (
			<Popup>
				<PopupInner>
					<TopBanner>
						<Logo></Logo>
						Game of life!
				</TopBanner>
					<Body>
						<Button onClick={onClickInvert} >Revert</Button>
						<Button onClick={onClickNext} >Next</Button>
						<Button onClick={onClickStartStop} >{delay === null ? 'Start' : 'Stop'}</Button>
						<Button disabled>Speed:</Button>
						<Button onClick={() => setDelay(100)} >100</Button>
						<Button onClick={() => setDelay(200)} >200</Button>
						<Button onClick={() => setDelay(400)} >400</Button>
						<Button onClick={() => setDelay(600)} >600</Button>
						<Button onClick={() => setDelay(1500)}>1500</Button>
						<hr />
						<Button onClick={() => dispatch(resizeWorld({ rows: 20, cols: 20, cellSize: 20 }))} >World: 20 x 20 </Button>
						<Button onClick={() => dispatch(resizeWorld({ rows: 30, cols: 40, cellSize: 16 }))} >World: 40 x 30 </Button>
						<Button onClick={() => dispatch(resizeWorld({ rows: 40, cols: 50 }))} >World: 50 x 40 </Button>
						<hr />
						<Button onClick={() => dispatch(setCellSize(12))} >Cellsize: 12</Button>
					</Body>
					<BottomBanner>
						<Button onClick={() => dispatch(closeSettingsDialog())} >Close</Button>
					</BottomBanner>
				</PopupInner>
			</Popup>
		);
	else
	 	return (<></>);
}

export default Seting;
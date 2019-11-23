import React, { useState } from 'react';
import styled from 'styled-components';

//import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from "react-redux";
import { invertWorld, nextWorld, setCellSize, closeSettingsDialog, resizeWorld } from '../redux/actions';
import useInterval from '../hooks/useInterval';
import { getSettingsDialog } from 'redux/reducers/uiState';
import { getColors } from 'redux/reducers/theme';
import TopBanner from 'elemens/topBanner';
import BottomBanner from 'elemens/bottomBanner';
import BodyBanner from 'elemens/bodyBanner';
import Button from 'elemens/button';
import PopupModal from 'elemens/popupModal';

const Seting = () => {
	const dispatch = useDispatch();
	const settingsDialog = useSelector(getSettingsDialog);
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
			<PopupModal>
					<TopBanner>
						Game of life!
					</TopBanner>
					<BodyBanner>
						<br />
						<Button onClick={onClickInvert} blue >Revert</Button>
						<Button onClick={onClickNext} >Next</Button>
						<Button onClick={onClickStartStop} >{delay === null ? 'Start' : 'Stop'}</Button>
						<Button disabled>Speed:</Button>
						<Button onClick={() => setDelay(100)} >100</Button>
						<Button onClick={() => setDelay(200)} >200</Button>
						<Button onClick={() => setDelay(400)}  green>400</Button>
						<Button onClick={() => setDelay(600)}  green>600</Button>
						<Button onClick={() => setDelay(1500)} green>1500</Button>
						<hr />
						<Button onClick={() => dispatch(resizeWorld({ rows: 20, colls: 20, cellSize: 20 }))} >World: 20 x 20 </Button>
						<Button onClick={() => dispatch(resizeWorld({ rows: 30, colls: 40, cellSize: 16 }))} >World: 40 x 30 </Button>
						<Button onClick={() => dispatch(resizeWorld({ rows: 40, colls: 50 }))} >World: 50 x 40 </Button>
						<hr />
						<Button onClick={() => dispatch(setCellSize(12))}>Cellsize: 12</Button>
					</BodyBanner>
					<BottomBanner>
						<Button onClick={() => dispatch(closeSettingsDialog())} red >Close</Button>
					</BottomBanner>
			</PopupModal>
		);
	else
		return (<></>);
}

export default Seting;
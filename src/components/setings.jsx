import React from 'react';
//import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from "react-redux";
import { invertWorld, nextWorld, setCellSize, closeSettingsDialog, resizeWorld, stopWorld, startWorld, setInter, setCellTipe } from '../redux/actions';
// import { getSettingsDialog } from 'redux/reducers/uiState';
import TopBanner from 'elemens/topBanner';
import BottomBanner from 'elemens/bottomBanner';
import BodyBanner from 'elemens/bodyBanner';
import Button from 'elemens/button';
import PopupModal from 'elemens/popupModal';
import { SET_INTERVAL } from 'redux/actionTypes';
import { getDelay, getSettingsDialogState } from 'redux/selectors';

const Seting = () => {
	const dispatch = useDispatch();
	const settingsDialog = useSelector(getSettingsDialogState);
	const delay = useSelector(getDelay);

	return ( 
		<PopupModal showModal={settingsDialog}>
			<TopBanner>
				Game of life!
					</TopBanner>
			<BodyBanner>
				<br />
				<Button onClick={() => { dispatch(invertWorld()) }} blue >Revert</Button>
				<Button onClick={() => dispatch(nextWorld())} >Next</Button>
				{delay ?
					<Button onClick={() => dispatch(stopWorld())} >'Stop'</Button>
					:
					<Button onClick={() => dispatch(startWorld())} >'Start'</Button>
				}
				<Button disabled>Interval: {delay}</Button>
				<br />
				<Button onClick={() => dispatch(setInter(50))}>50</Button>
				<Button onClick={() => dispatch({ type: SET_INTERVAL, payload: 100 })} >100</Button>
				<Button onClick={() => dispatch(setInter(200))} >200</Button>
				<Button onClick={() => dispatch(setInter(400))} >400</Button>
				<Button onClick={() => dispatch(setInter(600))} >600</Button>
				<Button onClick={() => dispatch(setInter(1500))} >1500</Button>
				<hr />
				<Button onClick={() => dispatch(resizeWorld({ rows: 20, colls: 20, cellSize: 20 }))} >World: 20 x 20 </Button>
				<Button onClick={() => dispatch(resizeWorld({ rows: 30, colls: 40, cellSize: 16 }))} >World: 40 x 30 </Button>
				<Button onClick={() => dispatch(resizeWorld({ rows: 40, colls: 50 }))} >World: 50 x 40 </Button>
				<hr />
				<Button onClick={() => dispatch(setCellSize(12))}>Cellsize: 12</Button>
				<Button onClick={() => dispatch(setCellTipe('image'))}>Apple</Button>
				<Button onClick={() => dispatch(setCellTipe('square'))}>Square</Button>
			</BodyBanner>
			<BottomBanner>
				<Button onClick={() => dispatch(closeSettingsDialog())} red >Close</Button>
			</BottomBanner>
		</PopupModal>
	);
}

export default Seting;
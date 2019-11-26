import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { closeAboutDialog } from '../redux/actions';
import TopBanner from 'elemens/topBanner';
import BottomBanner from 'elemens/bottomBanner';
import BodyBanner from 'elemens/bodyBanner';
import Button from 'elemens/button';
import PopupModal from 'elemens/popupModal';
import { getAboutDialogState } from 'redux/selectors';
import useWinSize from 'hooks/winSize';

const AboutDialog = () => {
	const dispatch = useDispatch();
	const aboutDialogState = useSelector(getAboutDialogState);
	const winSize = useWinSize();

	return (
		<PopupModal show={aboutDialogState}>
			<TopBanner>
				About Game of life!
					</TopBanner>
			<BodyBanner>
				<br />
				<p>Sir={winSize.width} Visina={winSize.height}</p>
			</BodyBanner>
			<BottomBanner>
				<Button onClick={() => dispatch(closeAboutDialog())} red >Close</Button>
			</BottomBanner>
		</PopupModal>
	);
}

export default AboutDialog;
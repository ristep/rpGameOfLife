import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { closeAboutDialog } from '../redux/actions';
import TopBanner from 'elemens/topBanner';
import BottomBanner from 'elemens/bottomBanner';
import BodyBanner from 'elemens/bodyBanner';
import Button from 'elemens/button';
import PopupModal from 'elemens/popupModal';
import { getAboutDialogState } from 'redux/selectors';
import useWinSize from 'hooks/winSize';
// import { setState } from 'expect/build/jestMatchersObject';

const SamsungRemote = require('samsung-remote');

const AboutDialog = () => {
	const dispatch = useDispatch();
	const aboutDialogState = useSelector(getAboutDialogState);
	const winSize = useWinSize();
	const  [ rem, setRem ] = useState()
	
	useEffect(() => {
		const remote = new SamsungRemote({
			ip: '192.168.100.101' // required: IP address of your Samsung Smart TV
		});
		setRem(remote);
	}, []);

	const onSoundUp = () => {
		rem.send('KEY_VOLUP', (err) => {
			if (err) {
					throw new Error(err);
			} else {
				console.log('Up sound, Yeeee')
				// command has been successfully transmitted to your tv
			}
	});
	}

	const onSoundDown = () => {
		rem.send('KEY_VOLDOWN', (err) => {
			if (err) {
					throw new Error(err);
			} else {
				console.log('soundDown')
				// command has been successfully transmitted to your tv
			}
	});	
	}

	return (
		<PopupModal showModal={aboutDialogState}>
			<TopBanner>
				About Game of life!
			</TopBanner>
			<BodyBanner>
				<Button onClick={() => onSoundDown()} >Погласи</Button>
				<Button onClick={() => onSoundUp()} >Постиши</Button>
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
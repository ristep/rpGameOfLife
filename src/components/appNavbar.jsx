import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openSettingsDialog, nextWorld, startWorld, stopWorld, openAboutDialog } from 'redux/actions';
import NavBar from 'elemens/navBar';
import styled from 'styled-components';
import { getColors } from 'redux/reducers/theme';
import { getDelay } from 'redux/selectors';

const AppNavBar = () => {
	const dispatch = useDispatch();
	const color = useSelector(getColors);
	const delay = useSelector(getDelay);

	const Link = styled.a`
		display: block;
		color: white;
		text-align: center;
		padding: 0px 14px 0px 14px; 
		text-decoration: none;
		user-select: none;
		float: left;
		&.running{
			background-color: ${color.button.green};
		}
		:hover{
				background-color: ${color.button.red};
		}
	`;

	return (
		<NavBar>
			<Link onClick={() => dispatch(nextWorld())} >Next</Link>
			{ delay ?
				<Link onClick={() =>dispatch(stopWorld())} className={'running'} >Stop</Link>
			:
				<Link onClick={() => dispatch(startWorld())} >Start</Link>
			}		
			<Link onClick={() => dispatch(openSettingsDialog())}>Setings</Link>
			<Link style={{float:'right'}}  onClick={() => dispatch(openAboutDialog())}>About</Link>
		</NavBar>
	)

}

export default AppNavBar;
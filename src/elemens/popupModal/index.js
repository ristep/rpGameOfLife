import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { getColors } from 'redux/reducers/theme';
import "./index.css";

const fadeInArr=[
	"tiltInFwdTr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	"bounceInRight 1.1s both",
	"scaleInCenter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	"rotateInCenter 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	"slideInEllipticTopFwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
]; 
 
const fadeOutArr=[
	"bounceOutTop 1.5s both",
	"scaleOutCenter 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
	"rollOutBlurredTop 0.6s cubic-bezier(0.755, 0.050, 0.855, 0.060) both",
	"slideOutEllipticTopBck 0.7s ease-in both",
]; 

const PopupModal = ({ show, children, ...rest }) => {
	const color = useSelector(getColors);
	const [render, setRender] = useState(false);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const animationEnd = () => {
		if (!show) setRender(false);
	};
	
	const fadeIn 	= Math.floor(Math.random() * fadeInArr.length);
	const fadeOut = Math.floor(Math.random() * fadeOutArr.length);
	const anime 	= show ? fadeInArr[fadeIn] : fadeOutArr[fadeOut];

	return(
		render &&
		<div className='Popup'>
			<div className='PopupInner'
				style={{ animation: `${anime}`, backgroundColor: color.background }}
				onAnimationEnd={() => animationEnd()}
				{...rest}
				>
					{children}
			</div>
		</div>
	);
};

export default PopupModal;
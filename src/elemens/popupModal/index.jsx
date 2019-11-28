import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getColors } from "redux/reducers/theme";
import "./index.css";

import styled from "styled-components";

const PopupOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PopupInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 6px;
  box-shadow: 10px 10px 5px rgba(9, 9, 9, 0.2);
  user-select: none;
`;

const fadeInArr = [
  "tiltInFwdTr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  "bounceInRight 1.1s both",
  "scaleInCenter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  "rotateInCenter 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  "slideInEllipticTopFwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
];

const fadeOutArr = [
  "bounceOutTop 1.5s both",
  "scaleOutCenter 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
  "rollOutBlurredTop 0.6s cubic-bezier(0.755, 0.050, 0.855, 0.060) both",
  "slideOutEllipticTopBck 0.7s ease-in both"
];

const PopupModal = ({ showModal: show, children }) => {
  const color = useSelector(getColors);
  const [rend, setRend] = useState(false);
  const [anime, setAnime] = useState();

  useEffect(() => {
    if (show) 
      setRend(true);
		const fadeIn = Math.floor(Math.random() * fadeInArr.length);
		const fadeOut = Math.floor(Math.random() * fadeOutArr.length);
		setAnime(show ? fadeInArr[fadeIn] : fadeOutArr[fadeOut]);
  }, [show]);

  const animationEnd = () => {
    if (!show) setRend(false);
  };

  return (
    rend && 
      <PopupOuter>
        <PopupInner
          style={{ animation: `${anime}`, backgroundColor: color.background }}
          onAnimationEnd={() => animationEnd()}
        >
          {children}
        </PopupInner>
      </PopupOuter>
  );
};

export default PopupModal;

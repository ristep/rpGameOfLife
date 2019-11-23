import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { getColors } from 'redux/reducers/theme';

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
	border-radius: 6px;
	box-shadow: 10px 10px 5px rgba(9,9,9, 0.2);
`;

const PopupModal = (props) => {
	const color = useSelector(getColors);
	
	return (
		<Popup>
			<PopupInner  style={{ backgroundColor: color.background}} {...props}>
				{props.children}
			</PopupInner>
		</Popup>
	);
}

export default PopupModal;
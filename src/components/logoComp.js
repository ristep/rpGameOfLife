import React from 'react';
import styled from 'styled-components';
import logo from "../logo.svg";
 
const Img = styled.img`
  position: relative;
  top: 8px;
  left: 6px;	height: 8ch;
`;

const Logo = () => {
	
	return (
		<>
			<Img src={logo} alt="logo" />
		</>
	);
} 

export default Logo;
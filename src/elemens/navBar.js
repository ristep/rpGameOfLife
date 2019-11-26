import React from 'react';
import styled from 'styled-components';

import { useSelector } from "react-redux";
import { getColors } from 'redux/reducers/theme';

const AppNavStyled = styled.div`
position: relative;
height: 32px;
line-height:32px;
text-align: center;
font-size: 16px;
color: white;
box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.66);
`;

const NavBar = (props) => {
	const color = useSelector(getColors);

	return(
		<AppNavStyled style={{ backgroundColor: color.primary} }>
			{props.children}
		</AppNavStyled>
	)
	
}

export default NavBar;
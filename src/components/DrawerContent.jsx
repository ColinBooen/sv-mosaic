import React from "react";
import styled from "styled-components";

import DrawerTopBar from "./internal/DrawerTopBar.jsx";
import DrawerBottom from "./internal/DrawerBottom.jsx";

const StyledDiv = styled.div`
	width: 600px;
`

function DrawerContent(props) {
	return (
		<StyledDiv>
			<DrawerTopBar
				title={props.title}
				onSave={props.onSave}
				onApply={props.onApply}
				onClose={props.onClose}
				onCancel={props.onCancel}
			/>
			<DrawerBottom
				background={props.background}
			>
				{props.children}
			</DrawerBottom>
		</StyledDiv>
	)
}

export default DrawerContent;
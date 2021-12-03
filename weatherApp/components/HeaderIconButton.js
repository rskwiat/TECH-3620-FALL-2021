/** 
Header Icon Button

Reusable Icon Button for the header component
- Name (name of Icon)
- Color (color of icon)
- Size (Size of Icon)
- onPress (When we click on the icon button what its going to do).
*/

import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-native-elements";

const HeaderIconButton = ({ name, color, size, onPress }) => (
	<Icon
		type="feather"
		name={name}
		color={color}
		size={size}
		onPress={onPress}
	/>
);

HeaderIconButton.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired
};

export default HeaderIconButton;

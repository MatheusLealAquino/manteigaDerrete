import React from 'react';
import { View } from 'react-native';

export default (props) => {
	return (
		<View
			style={{
				borderBottomColor: 'black',
				borderBottomWidth: 1,
				...props.style
			}}
		/>
	);
}

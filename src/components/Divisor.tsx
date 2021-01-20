import React from 'react';
import { View } from 'react-native';

export default (props) => {
	return (
		<View
			style={{
				borderBottomColor: '#e7e4d9',
				borderBottomWidth: 1,
				...props.style
			}}
		/>
	);
}

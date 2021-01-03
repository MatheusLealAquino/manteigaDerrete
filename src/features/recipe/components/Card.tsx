import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colorsStyle from '../../../style/colors.style';

export default (props: {
	name: string
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.item}>
				{props.name}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 3,
		marginBottom: 3,
		padding: 20,
		borderColor: colorsStyle.black,
		borderWidth: 0.3,
		borderRadius: 5,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	},
});
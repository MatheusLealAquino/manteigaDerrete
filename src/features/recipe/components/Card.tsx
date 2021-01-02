import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
		flex: 1,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	},
});
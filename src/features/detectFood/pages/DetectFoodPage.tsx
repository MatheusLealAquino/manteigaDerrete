import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DefaultStyle from '../../../style/default.style';

import IRecipe from '../../../interfaces/recipe.interface';

export default ({}) => {
	const initialRecipe = {
		name: '',
		serving: 0,
		ingredients: [],
		preparation: ''
	};

	const [receipe, setRecipe] = useState<IRecipe>(initialRecipe);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text
					style={styles.headerText}
				>
					{receipe.name}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...DefaultStyle.container,
		padding: 10
	},
	header: {
		display: 'flex',
		marginBottom: 30,
	},
	headerText: {
		fontSize: 30,
	}
});

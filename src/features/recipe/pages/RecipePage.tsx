import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DefaultStyle from '../../../style/default.style';

export default ({
	match
}) => {
	const [receipe, setReceipe] = useState(
		{
			id: match.params.id,
			name: match.params.id,
			steps: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur quam dolor, non finibus orci volutpat quis. Vestibulum sagittis, neque nec mollis varius, ex tellus commodo justo,vitae eleifend mi diam et ipsum. Vivamus ac ornare nunc. Nam finibus, ante at sollicitudin efficitur, tellus eros vehicula sem, vel scelerisque augue augue a felis. Morbi enim urna, porta vel pulvinar vitae, tempus a elit. In vel fermentum mi. Quisque a dolor erat. Nunc ut vehicula ligula. Nunc fringilla fringilla lacus, ac euismod ante malesuada in. Integer mauris sem, ultricies eu luctus vitae, tincidunt vitae nunc.`
		},
	);

	return (
		<View style={styles.container}>
			<Text>Nome: {receipe.name}</Text>
			<Text>{receipe.steps}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
});

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DefaultStyle from '../../../style/default.style';
import Divisor from '../../../components/Divisor';

export default ({
	match
}) => {
	const [receipe, setReceipe] = useState(
		{
			id: match.params.id,
			name: match.params.id,
			totalTime: 30,
			serving: 2,
			ingredients: [
				{
					id: 0,
					quantity: 0,
					name: 'Manteiga'
				}
			],
			preparation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur quam dolor, non finibus orci volutpat quis. Vestibulum sagittis, neque nec mollis varius, ex tellus commodo justo,vitae eleifend mi diam et ipsum. Vivamus ac ornare nunc. Nam finibus, ante at sollicitudin efficitur, tellus eros vehicula sem, vel scelerisque augue augue a felis. Morbi enim urna, porta vel pulvinar vitae, tempus a elit. In vel fermentum mi. Quisque a dolor erat. Nunc ut vehicula ligula. Nunc fringilla fringilla lacus, ac euismod ante malesuada in. Integer mauris sem, ultricies eu luctus vitae, tincidunt vitae nunc.`
		},
	);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text
					style={styles.headerText}
				>
					{receipe.name}
				</Text>
			</View>

			<View>
				<Divisor 
					style={{marginBottom: 20}}
				/>
				<Text>{receipe.preparation}</Text>
				<Divisor
					style={{marginTop: 20}}
				/>
			</View>

			<View style={{flexDirection: 'row', paddingHorizontal: 5}}>
				<View style={{flex:1}}>
					<Text>
						Tempo de preparação: <Text style={{fontWeight: 'bold'}}>{receipe.totalTime} minutos</Text>
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
	header: {
		display: 'flex',
		marginBottom: 15,
	},
	headerText: {
		fontSize: 30,
	}
});

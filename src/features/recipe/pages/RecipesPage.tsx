import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';

import DefaultStyle from '../../../style/default.style';
import Card from '../components/Card';

export default ({ navigation }) => {
	const [names, setNames] = useState(
		[
			{
				id: 'Macarrão',
				name: 'Macarrão'
			},
			{
				id: 'Arroz',
				name: 'Arroz'
			},
			{
				id: 'Nhoque',
				name: 'Nhoque'
			},
		]
	);

	function onDelete(id: string) {
		setNames(names.filter(el => el.id !== id));
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={names}
				extraData={names}
				renderItem={
					({item}) => {
						return <Card
							id={item.id}
							name={item.name}
							onDelete={onDelete}
							navigation={navigation}
						/>
					}
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
});

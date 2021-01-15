import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import DefaultStyle from '../../../style/default.style';
import Card from '../components/Card';

export default ({ navigation }) => {
	const [names, setNames] = useState(
		[
			{
				_id: 'Macarrão',
				name: 'Macarrão'
			},
			{
				_id: 'Arroz',
				name: 'Arroz'
			},
			{
				_id: 'Nhoque',
				name: 'Nhoque'
			},
		]
	);

	function onDelete(id: string) {
		setNames(names.filter(el => el._id !== id));
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={names}
				extraData={names}
				renderItem={
					({item}) => {
						return <Card
							key={item._id}
							id={item._id}
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

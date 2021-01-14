import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import DefaultStyle from '../../../style/default.style';
import Card from '../components/Card';

export default () => {
	const [names, setNames] = useState(
		[
			{key: 'Devin'},
			{key: 'Dan'},
			{key: 'Dominic'},
			// {key: 'Jackson'},
			// {key: 'James'},
		]
	);

	function onDelete(id: string) {
		setNames(names.filter(el => el.key !== id));
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={names}
				extraData={names}
				renderItem={
					({item}) => {
						return <Card
							id={item.key}
							name={item.key}
							onDelete={onDelete}
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

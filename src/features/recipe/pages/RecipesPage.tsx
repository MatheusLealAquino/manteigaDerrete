import React, { useState } from 'react';
import { Text, StyleSheet, FlatList, View, Alert } from 'react-native';

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
			// {key: 'Joel'},
			// {key: 'John'},
			// {key: 'Jillian'},
			// {key: 'Jimmy'},
			// {key: 'Julie'},
		]
	);
	const [refresh, setRefresh] = useState(false);

	function onDelete(id: string) {
		setNames(names.filter(el => el.key !== id));
		setRefresh(true);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={names}
				extraData={refresh}
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

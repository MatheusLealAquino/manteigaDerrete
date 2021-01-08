import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import DefaultStyle from '../../../style/default.style';
import Card from '../components/Card';

export default () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={[
					{key: 'Devin'},
					{key: 'Dan'},
					// {key: 'Dominic'},
					// {key: 'Jackson'},
					// {key: 'James'},
					// {key: 'Joel'},
					// {key: 'John'},
					// {key: 'Jillian'},
					// {key: 'Jimmy'},
					// {key: 'Julie'},
				]}
				renderItem={
					({item}) => {
						return <Card
							id={item.key}
							name={item.key}
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

import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { Link } from 'react-router-native';

import DefaultStyle from '../../../style/default.style';
import Card from '../components/Card';

export default () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={[
					{key: 'Devin'},
					{key: 'Dan'},
					{key: 'Dominic'},
					{key: 'Jackson'},
					{key: 'James'},
					{key: 'Joel'},
					{key: 'John'},
					{key: 'Jillian'},
					{key: 'Jimmy'},
					{key: 'Julie'},
				]}
				renderItem={
					({item}) => {
						return <Link
							to="/topics"
							underlayColor="#f0f4f7"
						>
							<Card
								name={item.key}
							/>
						</Link>
					}
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
});
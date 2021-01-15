import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultStyle from './src/style/default.style';

import routes from './src/routes';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Stack.Navigator initialRouteName="RecipesPage">
					{
						routes.map((route, index: number) => (
							<Stack.Screen
								key={index}
								name={route.name} 
								component={route.main}
								options={{ title: route.title }}
							/>
						))
					}
				</Stack.Navigator>
				<StatusBar style="auto" />
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		...DefaultStyle.container,
		paddingTop: 0,
	},
});

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Link } from 'react-router-native';

import DefaultStyle from './src/style/default.style';

import RoutesInterface from './src/interfaces/RoutesInterface';
import routes from './src/routes';

export default function App() {
	return (
		<NativeRouter>
			<View style={styles.container}>
				<View style={styles.nav}>
					<Link
						to="/"
						underlayColor="#f0f4f7"
						style={styles.navItem}
					>
						<Text
							style={styles.navItemText}
						>
							Home
						</Text>
					</Link>
					<Link
						to="/topics"
						underlayColor="#f0f4f7"
						style={styles.navItem}
					>
						<Text
							style={styles.navItemText}
						>
							Topics
						</Text>
					</Link>
				</View>

				{
					routes.map((route: RoutesInterface, index: Number) => (
						<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
						/>
					))
				}

				<StatusBar style="auto" />
			</View>
		</NativeRouter>
	);
}

const styles = StyleSheet.create({
	container: {
		...DefaultStyle.container,
		backgroundColor: '#fff',
		paddingTop: 0,
		padding: 15,
		marginTop: 30
	},
	nav: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	navItem: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	navItemText: {
		fontSize: 20
	}
});

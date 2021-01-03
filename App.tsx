import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Link, BackButton } from 'react-router-native';

import DefaultStyle from './src/style/default.style';
import colorsStyle from './src/style/colors.style';

import routes from './src/routes';

export default function App() {
	return (
		<NativeRouter>
			<View style={styles.container}>
				<View style={styles.nav}>
					<Link
						to="/"
						underlayColor={colorsStyle.blue_100}
						style={styles.navItem}
					>
						<Text
							style={styles.navItemText}
						>
							Receitas
						</Text>
					</Link>
					<Link
						to="/list"
						underlayColor={colorsStyle.blue_100}
						style={styles.navItem}
					>
						<Text
							style={styles.navItemText}
						>
							Lista de compras
						</Text>
					</Link>
				</View>

				{
					routes.map((route, index: number) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.main}
						/>
					))
				}

				<StatusBar style="auto" />
				<BackButton />
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

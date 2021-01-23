import React from 'react';
import { 
	StyleSheet,
	View,
	Platform,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	SafeAreaView,
	ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultStyle from './src/style/default.style';

import routes from './src/routes';

import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
	const Stack = createStackNavigator();

	return (
		<KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
			<NavigationContainer>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<SafeAreaView style={styles.container}>
						<Stack.Navigator initialRouteName='RecipesPage'>
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
						<StatusBar style='auto' />
					</SafeAreaView>
				</TouchableWithoutFeedback>
			</NavigationContainer>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		...DefaultStyle.container,
		paddingTop: 0,
	},
});

import React from 'react';
import { 
	StyleSheet,
	Platform,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	SafeAreaView,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DefaultStyle from './src/style/default.style';

import {
	MainStackNavigator,
	CreateRecipeStackNavigator
} from './src/navigator/StackNavigator';

enableScreens();

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
			<NavigationContainer>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<SafeAreaView style={styles.container}>
						<Tab.Navigator tabBarOptions={{

						}}>
							<Tab.Screen
								name='Home'
								component={MainStackNavigator}
							/>
							<Tab.Screen
								name='Adicionar receita'
								component={CreateRecipeStackNavigator}
							/>
						</Tab.Navigator>
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

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
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      behavior={Platform.OS === "ios" ? "padding" : undefined }
      style={{flex: 1}}
    >
			<NavigationContainer>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<SafeAreaView style={styles.container}>
						<Tab.Navigator
							tabBarOptions={{
								labelStyle: {
									paddingVertical: 3,
								}
							}}

							screenOptions={({route}) => ({
								tabBarIcon: ({color, size}) => {
									let iconName;

									switch(route.name) {
										case 'Home':
											iconName = 'home';
											break;
										case 'Adicionar receita':
											iconName = 'add-circle-outline'
									}

									return <Ionicons name={iconName} size={size} color={color} />
								}
							})}
						>
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
	},
});

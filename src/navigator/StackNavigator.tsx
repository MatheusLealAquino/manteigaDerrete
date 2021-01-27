import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ColorsStyle from '../style/colors.style';

import RecipesPage from '../features/recipe/pages/RecipesPage';
import RecipePage from '../features/recipe/pages/RecipePage';
import CreateRecipePage from '../features/recipe/pages/CreateRecipePage';

import DetectFoodPage from '../features/detectFood/pages/DetectFoodPage';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: ColorsStyle.yellow_000,
  },
  headerTintColor: ColorsStyle.white,
  headerBackTitle: ColorsStyle.black,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
				name='RecipesPage'
				component={RecipesPage}
				options={{
					title: 'Minhas receitas'
				}}
			/>
      <Stack.Screen
				name='RecipePage'
				component={RecipePage}
				options={{
					title: 'Receita'
				}}
			/>
    </Stack.Navigator>
  );
}

const CreateRecipeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
				name='CreateRecipePage'
				component={CreateRecipePage}
				options={{
					title: 'Adicionar receita'
				}}
			/>
    </Stack.Navigator>
  );
}

const DetectFoodStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
				name='DetectFoodPage'
				component={DetectFoodPage}
				options={{
					title: 'Detecte a comida'
				}}
			/>
    </Stack.Navigator>
	)
}

export {
	MainStackNavigator,
	CreateRecipeStackNavigator,
	DetectFoodStackNavigator
};
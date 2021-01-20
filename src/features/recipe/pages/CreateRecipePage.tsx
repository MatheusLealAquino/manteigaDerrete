import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, FlatList } from 'react-native';

import { IIngredients } from '../../../interfaces/IIngredients';
import { IRecipe } from '../../../interfaces/IRecipe';

import DefaultStyle from '../../../style/default.style';

export default ({ navigation }) => {
	const [ingredients, setIngredients] = useState<IIngredients[]>([]);

	const [recipes, setRecipes] = useState<IRecipe[]>([]);
	const [recipe, setRecipe] = useState<IRecipe>({
		name: '',
		totalTime: 0,
		serving: 0,
		ingredients: [...ingredients],
		preparation: ''
	});

	function onCreate(recipe: IRecipe) {
		setRecipes([...recipes, recipe]);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={recipe.ingredients}
				extraData={recipe.ingredients}
				renderItem={
					({item}) => {
						return <Text>
							{item.name}
						</Text>
					}
				}
			/>

			<Button
				title='Salvar receita'
				onPress={() => {
					onCreate(recipe)
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container
})


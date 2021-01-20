import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, FlatList } from 'react-native';
import Input from '../../../components/Input';

import { IIngredients } from '../../../interfaces/IIngredients';
import { IRecipe } from '../../../interfaces/IRecipe';

import DefaultStyle from '../../../style/default.style';

import Ingredient from '../components/Ingredient';
import Divisor from '../../../components/Divisor';

export default ({ navigation }) => {
	const [ingredients, setIngredients] = useState<IIngredients[]>([]);

	const [recipes, setRecipes] = useState<IRecipe[]>([]);
	const [recipe, setRecipe] = useState<IRecipe>({
		name: '',
		totalTime: 0,
		serving: 0,
		ingredients: [],
		preparation: ''
	});

	function onCreate(recipe: IRecipe) {
		setRecipes([...recipes, recipe]);
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputView}>
				<Text>Nome: </Text>
				<Input
					value={recipe.name}
					changeText={(text) => { setRecipe(text) }}
				/>
			</View>

			<View style={styles.inputView}>
				<Text>Tempo de preparo: (minutos) </Text>
				<Input
					value={`${recipe.totalTime}`}
					changeText={(text) => { setRecipe(text) }}
					keyboardTypeValue={'number'}
				/>
			</View>

			<View style={styles.inputView}>
				<Text>Serve até: </Text>
				<Input
					value={`${recipe.serving}`}
					changeText={(text) => { setRecipe(text) }}
					keyboardTypeValue={'number'}
				/>
			</View>

			<View style={styles.inputView}>
				<Divisor 
					style={{marginBottom: 5}}
				/>
				<Ingredient
					onAdd={setIngredients}
				/>
			</View>

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
	container: DefaultStyle.container,
	inputView: {
		paddingHorizontal: 10,
		paddingTop: 10
	}
})

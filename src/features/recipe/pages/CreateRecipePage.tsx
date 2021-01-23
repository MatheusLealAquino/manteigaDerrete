import React, { useState } from 'react';
import { 
	Button,
	StyleSheet,
	View,
	Text,
	ScrollView,
	Alert
} from 'react-native';
import Input from '../../../components/Input';

import { IIngredients } from '../../../interfaces/IIngredients';
import { IRecipe } from '../../../interfaces/IRecipe';

import DefaultStyle from '../../../style/default.style';

import Ingredient from '../components/Ingredient';
import Divisor from '../../../components/Divisor';

export default ({ navigation }) => {
	const [recipes, setRecipes] = useState<IRecipe[]>([]);
	const [recipe, setRecipe] = useState<IRecipe>({
		name: '',
		serving: 0,
		ingredients: [],
		preparation: ''
	});

	function onCreate(recipe: IRecipe) {
		const { name, serving, preparation, ingredients } = recipe;

		if (!name ||
				!serving ||
				!preparation ||
				(!ingredients || ingredients.length === 0)
			) {
			Alert.alert(
				`Favor preencher os campos com *`,
				'Verifique os campos com asterisco.',
				[
					{
						text: 'Tentar novamente',
						onPress: () => console.log('tentar novamente pressionado'),
					},
				],
				{ cancelable: true }
			);
			return;
		}

		setRecipes([...recipes, recipe]);
	}

	function setName(name: string) {
		setRecipe({
			...recipe,
			name
		})
	}

	function setPreparation(preparation: string) {
		setRecipe({
			...recipe,
			preparation
		})
	}

	function setServing(serving: string) {
		setRecipe({
			...recipe,
			serving: Number(serving)
		})
	}

	function setIngredients(ingredients: IIngredients) {
		const ingredientsToAdd = [...recipe.ingredients, ingredients];
		setRecipe({
			...recipe,
			ingredients: ingredientsToAdd
		})
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.inputView}>
					<Text>Nome: *</Text>
					<Input
						value={recipe.name}
						changeText={(text) => { setName(text) }}
					/>
				</View>

				<View style={styles.inputView}>
					<Text>Serve até: *</Text>
					<Input
						value={recipe.serving ? `${recipe.serving}` : ''}
						changeText={(text) => { setServing(text) }}
						keyboardTypeValue={'numeric'}
					/>
				</View>

				<View style={styles.inputView}>
					<Text>Modo de preparo: *</Text>
					<Input
						value={recipe.preparation ? `${recipe.preparation}` : ''}
						changeText={(text) => { setPreparation(text) }}
						keyboardTypeValue=''
						multiline={true}
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

				<Divisor style={{ marginTop: 15 }}/>
				<View style={{ ...styles.inputView, paddingBottom: 15}}>
					<Text>Lista de ingredientes: </Text>

					{recipe.ingredients.map(item => {
						return (<Text key={item.id}>
							({item.quantity}) {item.name}{item.description ? `: ${item.description}` : ''}
						</Text>)
					})}
				</View>

				<Button
					title='Salvar receita'
					onPress={() => {
						onCreate(recipe)
					}}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
	inputView: {
		paddingHorizontal: 10,
		paddingTop: 10,
	}
})

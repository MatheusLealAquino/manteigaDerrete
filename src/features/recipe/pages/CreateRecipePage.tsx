import React, { useState } from 'react';
import { 
	Button,
	StyleSheet,
	View,
	Text,
	ScrollView,
	Alert
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { IIngredients } from '../../../interfaces/IIngredients';
import { IRecipe } from '../../../interfaces/IRecipe';

import DefaultStyle from '../../../style/default.style';

import Input from '../../../components/Input';
import Ingredient from '../components/Ingredient';
import Divisor from '../../../components/Divisor';

import { recipeStore } from '../../../store';

export default ({ navigation }) => {
	const initialRecipe = {
		name: '',
		serving: 0,
		ingredients: [],
		preparation: ''
	};

	const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);

	useFocusEffect(
    React.useCallback(() => {
			console.log('limpando dados da tela de criar receita');
			setRecipe(initialRecipe);
    }, [navigation])
	);

	async function onCreate(recipe: IRecipe) {
		const { name, serving, preparation, ingredients } = recipe;

		if (!name ||
				!serving ||
				!preparation ||
				(!ingredients || ingredients.length === 0)
			) {
			Alert.alert(
				`Não foi possível salvar essa receita`,
				'Verifique os campos com asterisco (*)',
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

		Alert.alert(
			'Receita criada com sucesso!',
			'Aproveite sua receita xD',
			[
				{
					text: 'OK',
					onPress: () => console.log('tentar novamente pressionado'),
				},
			],
			{ cancelable: true }
		);

		await recipeStore.saveRecipe(recipe);
		setRecipe(initialRecipe);
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
						numberOfLines={5}
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
					<Text style={{fontWeight: 'bold'}}>
						{
							recipe.ingredients.length > 0 ? 'Lista de ingredientes:' : ''
						}
					</Text>

					{recipe.ingredients.map(item => {
						return (<Text key={item.id}>
							({item.quantity}) {item.name}{item.description ? `: ${item.description}` : ''}
						</Text>)
					})}
				</View>
				
				<View style={styles.buttonToCreate}>
					<Button
						title='Salvar receita'
						onPress={() => {
							onCreate(recipe)
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
	inputView: {
		paddingHorizontal: 10,
		paddingTop: 10,
	},
	buttonToCreate: {
		display: 'flex',
		padding: 10
	}
})

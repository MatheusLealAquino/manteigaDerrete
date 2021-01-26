import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Divisor from '../../../components/Divisor';

import { IIngredients } from '../../../interfaces/IIngredients';

import ColorsStyle from '../../../style/colors.style';
import DefaultStyle from '../../../style/default.style';

import { recipeStore } from '../../../store';
import { IRecipe } from '../../../interfaces/IRecipe';

export default ({
	route,
}) => {
	const divisorSpace = 10;
	const initialRecipe = {
		name: '',
		serving: 0,
		ingredients: [],
		preparation: ''
	};

	const [selected, setSelected] = useState({
		ingredients: true,
		preparation: false,
	});

	const [receipe, setRecipe] = useState<IRecipe>(initialRecipe);

	async function getRecipe() {
		setRecipe(
			await recipeStore.getRecipeById(route.params.id)
		);
	}

	useEffect(() => {
		getRecipe();
	});

	function mountIngredients (ingredients: Array<IIngredients>) : string {
		let result = ``;
		ingredients.forEach((ingredient) => {
			const { quantity, description, name } = ingredient;
			if (result) {
				result += `\n`;
			}

			result += `${quantity > 0 ? `(${quantity})` : ''} ${name}${description ? `: ${description}` : ''}`;
		});
		return result;
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text
					style={styles.headerText}
				>
					{receipe.name}
				</Text>
			</View>

			<View style={styles.options}>
				<View style={styles.optionsItem}>
					<Text
						style={{
							...DefaultStyle.text,
							color: selected.ingredients ? ColorsStyle.yellow_100 : ColorsStyle.black
						}}
						onPress={() => {
							setSelected({
								ingredients: true,
								preparation: false,
							})
						}}
					>
						Ingredientes
					</Text>
				</View>

				<View style={styles.optionsItem}>
					<Text
						style={{
							...DefaultStyle.text,
							color: selected.preparation ? ColorsStyle.yellow_100 : ColorsStyle.black
						}}
						onPress={() => {
							setSelected({
								ingredients: false,
								preparation: true,
							})
						}}
					>
						Preparação
					</Text>
				</View>
			</View>

			<View>
				<Divisor 
					style={{marginBottom: divisorSpace}}
				/>
				<Text style={styles.informationText}>
					{
						selected.ingredients ?
						 mountIngredients(receipe.ingredients) :
						 receipe.preparation
					}
				</Text>
				<Divisor
					style={{marginTop: divisorSpace}}
				/>
			</View>

			<View style={styles.footer}>
				<View style={{flex:1}}>
					<Text style={styles.footerText}>
						Serve até: <Text style={{fontWeight: 'bold'}}>{receipe.serving}</Text> pessoas.
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...DefaultStyle.container,
		padding: 10
	},
	header: {
		display: 'flex',
		marginBottom: 30,
	},
	headerText: {
		fontSize: 30,
	},
	options: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15,
	},
	optionsItem: {
		flex:1,
		alignItems: 'center',
	},
	informationText: {
		paddingHorizontal: 10,
		fontSize: 16
	},
	footer: {
		flexDirection: 'row', 
		paddingHorizontal: 5,
		marginTop: 10
	},
	footerText: {
		fontSize: 15
	}
});

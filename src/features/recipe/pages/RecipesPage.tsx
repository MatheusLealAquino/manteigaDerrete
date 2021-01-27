import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import IRecipe from '../../../interfaces/recipe.interface';

import DefaultStyle from '../../../style/default.style';
import Card from '../components/Card';

import { recipeStore } from '../../../store';

export default ({ navigation }) => {
	const [recipes, setRecipes] = useState<IRecipe[]>();

	useFocusEffect(
    React.useCallback(() => {
			getRecipes();
    }, [navigation])
	);

	async function getRecipes () {
		const initialRecipes = await recipeStore.getRecipes();
		setRecipes(initialRecipes);
	}

	async function onDelete(id: string) {
		await recipeStore.deleteRecipe(id);
		getRecipes();
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={recipes}
				extraData={recipes}
				renderItem={
					({item}) => {
						return <Card
							id={item.id}
							name={item.name}
							onDelete={onDelete}
							navigation={navigation}
						/>
					}
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: DefaultStyle.container,
});

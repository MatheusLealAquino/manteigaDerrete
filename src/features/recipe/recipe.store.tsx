import AsyncStorage from '@react-native-async-storage/async-storage';

import IRecipe from '../../interfaces/recipe.interface';

const getData = async (key: string) => {
  try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {
    console.error(e);
  }
}

const storeData = async (recipe: IRecipe) => {
  try {
		const recipes = await getData('recipes');
		recipe.id = `${new Date().getTime()}`;
		recipes.push(recipe);

    const jsonValue = JSON.stringify(recipes);
		await AsyncStorage.setItem('recipes', jsonValue);
		return recipe;
  } catch (e) {
    console.error(e);
  }
}

const deleteData = async (id: string) => {
	try {
		const recipes = await getData('recipes');

		if (recipes) {
			const jsonValue = JSON.stringify(
				recipes.filter(el => el.id !== id)
			);
			await AsyncStorage.setItem('recipes', jsonValue);
		}
	} catch (e) {
		console.error(e);
	}
}

export const saveRecipe = async (value: IRecipe) => {
	return await storeData(value);
};

export const getRecipes = async () => {
	return await getData('recipes');
}

export const getRecipeById = async (id: string) => {
	const recipes = await getData('recipes');
	return recipes.find(el => el.id === id);
};

export const deleteRecipe = async (id: string) => {
	await deleteData(id);
}

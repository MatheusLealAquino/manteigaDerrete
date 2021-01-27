import { IIngredients } from "./ingredients.interface";

export default interface IRecipe {
	id?: string,
	name: string,
	serving?: number,
	ingredients: Array<IIngredients>,
	preparation: string
}

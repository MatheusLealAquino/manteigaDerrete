import { IIngredients } from "./IIngredients";

export interface IRecipe {
	id?: string,
	name: string,
	serving?: number,
	ingredients: Array<IIngredients>,
	preparation: string
}

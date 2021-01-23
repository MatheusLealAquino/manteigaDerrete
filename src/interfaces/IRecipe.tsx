import { IIngredients } from "./IIngredients";

export interface IRecipe {
	_id?: string,
	name: string,
	serving?: number,
	ingredients: Array<IIngredients>,
	preparation: string
}

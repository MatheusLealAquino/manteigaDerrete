import { IIngredients } from "./IIngredients";

export interface IRecipe {
	_id?: string,
	name: string,
	totalTime: number,
	serving?: number,
	ingredients: Array<IIngredients>,
	preparation: string
}

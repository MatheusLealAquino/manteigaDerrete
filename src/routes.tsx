import RecipesPage from './features/recipe/pages/RecipesPage';
import RecipePage from './features/recipe/pages/RecipePage';
import CreateRecipePage from './features/recipe/pages/CreateRecipePage';

export default [
	{
		name: 'RecipesPage',
		main: RecipesPage,
		title: 'Receitas'
	},
	{
		name: 'RecipePage',
		main: RecipePage,
		title: 'Receita'
	},
	{
		name: 'CreateRecipePage',
		main: CreateRecipePage,
		title: 'Adicionar receita'
	}
]

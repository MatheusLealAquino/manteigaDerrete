import RecipesPage from './features/recipe/pages/RecipesPage';
import RecipePage from './features/recipe/pages/RecipePage';

export default [
	{
		path: '/',
		exact: true,
		main: RecipesPage
	},
	{
		path: '/receipe/:id',
		exact: true,
		main: RecipePage
	}
]

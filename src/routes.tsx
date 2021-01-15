import RecipesPage from './features/recipe/pages/RecipesPage';
import RecipePage from './features/recipe/pages/RecipePage';

export default [
	{
		path: '/',
		exact: true,
		name: 'RecipesPage',
		main: RecipesPage
	},
	{
		path: '/receipe/:id',
		exact: true,
		name: 'RecipePage',
		main: RecipePage
	}
]

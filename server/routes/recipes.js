import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';
import validateRecipe from '../middlewares/recipeValidation';

const router = express.Router();

// route for add recipe
router.post('/api/recipes', auth, validateRecipe.validateFields, controllers.Recipe.addRecipe);

// route for get recipes
router.get('/api/recipes', controllers.Recipe.searchRecipes, controllers.Recipe.fetchAllRecipes, controllers.Recipe.fetchTopRecipes);

// route for update recipe
router.put('/api/recipes/:recipeId', auth, validateRecipe.recipeExist, controllers.Recipe.updateARecipe);

// route for delete recipe
router.delete('/api/recipes/:recipeId', auth, validateRecipe.recipeExist, controllers.Recipe.destroyARecipe);

export default router;

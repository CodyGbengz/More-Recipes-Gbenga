import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers';
import validateRecipe from '../middlewares/recipeValidation';
import validateParams from '../middlewares/validateParams';
import validateOwnership from '../helpers/checkOwner';

const router = express.Router();

// route for creating a new recipe
router.post('/api/v1/recipe',
  auth,
  validateRecipe.validateFields,
  controllers.Recipe.addRecipe);

// route for fetching all recipes
router.get('/api/v1/recipes',
  controllers.Recipe.searchRecipes,
  controllers.Recipe.fetchAllRecipes,
  controllers.Recipe.fetchTopRecipes);

// route to get a users recipes
router.get('/api/v1/recipes/users',
  auth,
  controllers.Recipe.fetchUserRecipes);

// route to view recipe details
router.get('/api/v1/recipes/:recipeId',
  validateParams,
  validateRecipe.recipeExist,
  controllers.Recipe.fetchARecipe);

// route for update recipe
router.put('/api/v1/recipes/:recipeId',
  auth,
  validateParams,
  validateRecipe.recipeExist,
  validateOwnership,
  controllers.Recipe.updateARecipe);

// route for delete recipe
router.delete('/api/v1/recipes/:recipeId',
  auth,
  validateParams,
  validateRecipe.recipeExist,
  validateOwnership,
  controllers.Recipe.destroyARecipe);

export default router;

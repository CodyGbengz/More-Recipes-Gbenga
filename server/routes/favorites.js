import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers';
import validateParams from '../middlewares/validateParams';
import validateRecipe from '../middlewares/recipeValidation';
import validateOwnership from '../helpers/checkOwner';


const router = express.Router();

// route for adding a recipe to a user's list of favorites
router.post('/api/v1/users/:recipeId/favorites',
  auth,
  validateParams,
  validateRecipe.recipeExist,
  controllers.Favorite.addUserFavorites);

// route for getting a user's favorite recipes
router.get('/api/v1/users/favorites',
  auth,
  controllers.Favorite.fetchUserFavorites);

// route for adding favorite recipes to a category
router.put('/api/v1/users/:recipeId/favorites',
  auth,
  validateParams,
  validateRecipe.recipeExist,
  validateOwnership,
  controllers.Favorite.addToCategory);

// route for deleting a recipe from a user's list of favorites
router.delete('/api/v1/users/:recipeId/favorites',
  auth,
  validateParams,
  validateRecipe.recipeExist,
  // validateOwnership,
  controllers.Favorite.deleteUserFavourite);


export default router;

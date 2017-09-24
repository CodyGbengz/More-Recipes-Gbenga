import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';


const router = express.Router();

// route for adding to favorites
router.post('/api/users/:recipeId/favorites', auth, controllers.Favorite.add);

// route for getting favorites
router.get('/api/users/favorites', auth, controllers.Favorite.fetchUserFavorites);

// route for adding favorites to category
router.put('/api/users/:recipeId/favorites', auth, controllers.Favorite.addToCategory);

// route for deleting a recipe from favorites
router.delete('/api/users/:recipeId/favorites', auth, controllers.Favorite.deleteUserFavourite);


export default router;

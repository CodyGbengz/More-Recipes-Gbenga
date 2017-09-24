import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';


const router = express.Router();

// route for adding to favorites
router.post('/api/users/:recipeId/favorites', auth, controllers.Favorite.addUserFavorites);

// route for getting favorites
router.get('/api/users/recipes', auth, controllers.Favorite.fetchUserFavorites);


export default router;

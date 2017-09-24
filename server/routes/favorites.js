import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';


const router = express.Router();

// route for adding to favorites
<<<<<<< Updated upstream
router.post('/api/users/:userId/recipes', auth, controllers.Favorite.add);
=======
router.post('/api/users/:recipeId/favorites', auth, controllers.Favorite.addUserFavorites);
>>>>>>> Stashed changes

// route for getting favorites
router.get('/api/users/recipes', auth, controllers.Favorite.fetchUserFavorites);


export default router;

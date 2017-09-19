import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';
import validateRecipe from '../middlewares/recipeValidation';

const router = express.Router();

// route for posting a review
router.post('/api/recipes/:recipeId/reviews', auth, validateRecipe.recipeExist, controllers.Review.add);


export default router;

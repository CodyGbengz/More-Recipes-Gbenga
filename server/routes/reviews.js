import express from 'express';
import controllers from '../controllers/index';
import validateRecipe from '../middlewares/recipeValidation';

const router = express.Router();

// route for posting a review
router.post('/api/recipes/:recipeId/reviews', validateRecipe.recipeExist, controllers.Review.add);


export default router;

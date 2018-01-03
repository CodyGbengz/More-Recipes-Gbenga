import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers';

const router = express.Router();

// route for upvoting a recipe
router.put('/api/v1/recipes/:recipeId/upvote',
  auth,
  controllers.Vote.upvoteRecipe);

// route for downvoting a recipe
router.put('/api/v1/recipes/:recipeId/downvote',
  auth,
  controllers.Vote.downvoteRecipe);

export default router;

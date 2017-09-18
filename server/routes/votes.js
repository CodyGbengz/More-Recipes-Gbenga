import express from 'express';
import controllers from '../controllers/index';

const router = express.Router();

// route for upvoting
router.put('/api/recipes/:recipeId/upvote', controllers.Vote.upvote);

// route for downvoting
router.put('/api/recipes/:recipeId/downvote', controllers.Vote.downvote);

export default router;
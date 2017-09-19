import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';

const router = express.Router();

// route for upvoting
router.put('/api/recipes/:recipeId/upvote', auth, controllers.Vote.upvote);

// route for downvoting
router.put('/api/recipes/:recipeId/downvote', auth, controllers.Vote.downvote);

export default router;

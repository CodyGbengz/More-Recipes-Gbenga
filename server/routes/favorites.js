import express from 'express';
import controllers from '../controllers/index';

const router = express.Router();

// route for adding to favorites
router.post('/api/users/:userId/recipes', controllers.Favorite.add);

// route for getting favorites
router.get('/api/users/:userId/recipes', controllers.Favorite.fetch);


export default router;

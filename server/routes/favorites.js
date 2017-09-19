import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers/index';


const router = express.Router();

// route for adding to favorites
router.post('/api/users/:userId/recipes', auth, controllers.Favorite.add);

// route for getting favorites
router.get('/api/users/:userId/recipes', auth, controllers.Favorite.fetch);


export default router;

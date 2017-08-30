import express from 'express';
import controllers from '../controllers/index';

const router = express.Router();

// route for user sign up
router.post('/api/users/signup', controllers.User.create);
router.post('/api/users/signin', controllers.User.signin);

export default router;

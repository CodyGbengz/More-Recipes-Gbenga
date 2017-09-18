import express from 'express';
import controllers from '../controllers/index';
import validateUser from '../middlewares/userValidations';

const router = express.Router();

// route for user sign up
router.post('/api/users/signup', validateUser.validateFields, validateUser.validateEmail, validateUser.validateUsername, controllers.User.create);
// route for user sign in
router.post('/api/users/signin', controllers.User.signin);
// route for get users
router.get('/api/users', controllers.User.fetch);

export default router;

import express from 'express';
import controllers from '../controllers/index';
import validateUser from '../middlewares/userValidations';

const router = express.Router();

// route for user sign up
router.post('/api/users/signup', validateUser.validateSignUpFields, validateUser.validateEmail, validateUser.validateUsername, controllers.User.createUser);
// route for user sign in
router.post('/api/users/signin', validateUser.validateLoginFields, controllers.User.loginUser);
// route for get users
// router.get('/api/users', controllers.User.fetch);

export default router;

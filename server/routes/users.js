import express from 'express';
import controllers from '../controllers';
import validateUser from '../middlewares/userValidations';
import auth from '../middlewares/auth';

const router = express.Router();

// route for user sign up
router.post('/api/v1/user/signup',
  validateUser.validateSignUpFields,
  validateUser.validateEmail,
  validateUser.validateUsername,
  controllers.User.createUser);

// route for user sign in
router.post('/api/v1/user/signin',
  validateUser.validateLoginFields,
  controllers.User.loginUser);
// route for get users
router.get('/api/v1/user',
  auth,
  controllers.User.fetchUserDetails);
// route to edit user's profile
router.put('/api/v1/user',
  auth,
  controllers.User.editUserDetails);

export default router;

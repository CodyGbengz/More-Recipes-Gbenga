import express from 'express';
import controllers from '../controllers/index';

const router = express.Router();

// route for user sign up
router.post('/api/users/signup', controllers.User.create);
// route for user sign in
router.post('/api/users/signin', controllers.User.signin);

// authentication middleware
router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.send({
      message: 'Please sign in'
    });
  }
});

// route for logged in user sign out
router.post('/signout', (req, res) => {
  req.session.destroy();
  res.send({
    message: 'User signed out Successfully'
  });
});

// error handlers
router.use((err, req, res) => {
  res.send({
    messsage: err.message
  });
});

export default router;

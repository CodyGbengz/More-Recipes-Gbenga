import express from 'express';
import winston from 'winston';
import controllers from '../controllers/index';

const router = express.Router(); 

// authentication middleware
router.use((req, res, next) => {
  if (req.session.user) {
    winston.log(req.session.user);
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

export default router;
